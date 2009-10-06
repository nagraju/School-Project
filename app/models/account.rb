# == Schema Information
#
# Table name: accounts
#
#  id                   :integer         not null, primary key
#  login                :string(255)
#  email                :string(255)
#  crypted_password     :string(255)
#  password_salt        :string(255)
#  persistence_token    :string(255)     not null
#  single_access_token  :string(255)
#  perishable_token     :string(255)     not null
#  confirmed_at         :datetime
#  confirmation_sent_at :datetime
#  login_count          :integer         default(0), not null
#  failed_login_count   :integer         default(0), not null
#  last_request_at      :datetime
#  current_login_at     :datetime
#  last_login_at        :datetime
#  current_login_ip     :string(255)
#  last_login_ip        :string(255)
#  country              :string(255)
#  time_zone            :string(255)
#  locale               :string(255)
#

# encoding: utf-8

class Account < ActiveRecord::Base
  # using_access_control
  
  acts_as_authentic do |c|
    c.perishable_token_valid_for 5.days
    
    # Disable require password confirmation and AuthHelpers handle it, since it
    # adds email and password confirmation without validates length of password
    # check.
    c.require_password_confirmation = false
    
    # Login/Username is optional, not required for account signup.
    c.validate_login_field = false
    c.validate_email_field = false
    
    # E-mail validations.
    c.validates_length_of_email_field_options = {
        :within => 5..100,
        :allow_blank => true # should be true unless facebook connect
      }
      
    c.merge_validates_format_of_email_field_options :allow_blank => true
    
    # Password validations.
    c.validates_length_of_password_field_options = {
        :within => 6..20,
        :allow_blank => true,
        :if => :has_no_credentials?
      }
  end
  
  has_many :roles, :dependent => :delete_all
  has_one :profile, :dependent => :destroy
  
  # has_friendly_id :login, :use_slug => true, :strip_diacritics => true do |value|
  #   ::Slug.normalize(value)
  # rescue FriendlyId::SlugGenerationError # Value is nil or blank (most probably).
  #   # skip - or handle it here
  # end
  
  accepts_nested_attributes_for :profile, :allow_destroy => false
  accepts_nested_attributes_for :roles, :allow_destroy => false
  
  # Make these fields accessible (non-mass-assignment-protected).
  #
  attr_accessible :login, :profile_attributes
  
  # Add presence validations since we added allow blank to validates length of
  #
  validates_presence_of   :email #, :unless => :facebook_connected?
  validates_uniqueness_of :login, :case_sensitive => false, :allow_blank => true
  
  # default_values  :time_zone => 'UTC', :locale => 'en'
  
  after_create :bootstrap!
  before_save :validate_params
  
  # Login using either username/login, or e-mail.
  #
  def self.find_by_username_or_email(login)
    find_by_login(login) || find_by_email(login)
  end
  
  # Authentication Helpers (Authlogic).
  #
  include AuthHelpers::Model::Confirmable
  include AuthHelpers::Model::Recoverable
  include AuthHelpers::Model::Updatable
  
  # Authorization Helpers (DeclarativeAuthorization).
  #
  include DeclarativeAuthorization::AuthorizedModel
  
  # Facebook Connect: Synchronize user info from Facebook (Account <=> Facebook).
  #
  def before_connect(fb_session)
    begin
      # Get user info and store in session.
      fb_session.user.populate
      logger.debug "FACEBOOK SESSION: #{pp fb_session.user}"
      
      # == Account details.
      self.facebook_proxy_email = fb_session.user.try(:proxied_email)
      self.login      = fb_session.user.try(:username) # not supported by Facebooker right now
      self.locale     = fb_session.user.try(:locale) # or nil
      self.format_locale
      # "Stockholm" => "(GMT+01:00) Stockholm", "Never-Never-land" => "(GMT+00:00) UTC"
      self.time_zone  = fb_session.user.try(:current_location).try(:city)
      self.country    = fb_session.user.try(:current_location).try(:country) # or nil
      
      # == Account profile details.
      profile_hash = {}
      profile_hash[:real_name]  = fb_session.user.try(:name)
      # Based on locale =P
      profile_hash[:gender]     = fb_parse_gender(fb_session.user.try(:sex))
      
      # == Examples:
      # profile_hash[:about_me]   = facebook_session.user.try(:profile_blurb)
      # profile_hash[:birthdate]  = facebook_session.user.try(:birthday_date).try(:to_date)
      # profile_hash[:birthdate]  ||= facebook_session.user.try(:birthday).try(:to_date)
      
      self.profile ||= Profile.create(profile_hash)
    rescue Facebooker::Session::SessionExpired, ActionController::InvalidAuthenticityToken
      # proceed
    ensure
      self.confirmed_at = Time.now # Activate account - no e-mail confirmation for FBC-accounts.
      self.format_locale
    end
  end
  
  protected
    
    def validate_params
      self.login = nil if self.login.blank?
    end
    
    # Strip unessecary locale info, e.g. "en_US"/"en-US" => "en"
    #
    def format_locale
      self.locale = self.locale.gsub('_', '-').split(',').first.split('-').first if self.locale.present?
    end
    
    # Check if any credentials are specified for this authentic object.
    #
    def has_no_credentials?
      self.crypted_password.blank?
    end
    
    # Initialize account upon creation.
    #
    #   * set roles
    #   * create account profile
    #   ...
    #
    def bootstrap!
      self.roles << Role.create(:title => 'user') unless self.roles.include?(:user)
      self.profile ||= Profile.create
    end
    
    ### Facebook Connect ###
    
    # Gender needs to be looked up based on FB locale. xP
    #
    GENDER_MAP = {
      :en => {'male' => :m, 'female' => :f},
      :sv => {'man' => :m, 'kvinna' => :f}
    }
    
    # Lookup gender based on locale.
    #
    def fb_parse_gender(fb_sex)
      GENDER_MAP[self.locale.to_sym][fb_sex.to_s.downcase] rescue nil
    end
    
end
