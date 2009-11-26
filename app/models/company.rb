class Company < ActiveRecord::Base
  
  ACCEPTED_IMAGE_FORMATS = ['image/jpeg', 'image/pjpeg', 'image/jpg', 'image/png', 'image/gif']
  
  belongs_to :primary_company_contact, :class_name => "CompanyContact"
  has_one :account, :as => :accountable
  has_many :company_contacts
  has_many :cases
  
  has_attached_file :logo,
    :styles => {
      :small => '100x100#',
      :big => '150x150>'
    }
  
  attr_accessible :company_contacts_attributes, :company_contacts, :name, :location, :logo, :org_nr
  accepts_nested_attributes_for :company_contacts, :allow_destroy => true

  #validates_attachment_presence :logo
  validates_attachment_content_type :logo, :content_type => ACCEPTED_IMAGE_FORMATS
  
  validates_presence_of :name
  validates_presence_of :location
  validates_presence_of :org_nr
  validates_format_of :org_nr, :with => /^\d{6}[\s\-]?\d{4}$/, :allow_blank => true
  
  before_save :handle_orgnr
  before_create :create_account
  
  private
  
  def handle_orgnr
    self.org_nr = self.org_nr.gsub(/[\s\-]/, '')
  end
  
  def create_account
    self.account = Account.create(:email => self.primary_company_contact.email, :password => "123456", :password_confirmation => "123456")
  end
  
end
