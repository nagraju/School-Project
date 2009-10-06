# encoding: utf-8

class ActiveRecord::Base
  def self.included(base)
    base.class_eval do
      extend ClassMethods
      include InstanceMethods
    end
  end
  
  module ClassMethods
    
    # Make any ActiveRecord model loggable - for easier debugging of models.
    #
    # == Usage:
    #
    #   class Post < ActiveRecord::Base
    #     loggable                        # enables logging to RAILS_ROOT/log/classes/post.log
    #     loggable :suffix => Rails.env   # enables logging to RAILS_ROOT/log/classes/post_{RAILS_ENV}.log
    #     
    #     def my_method
    #       some_value = "Pip!"
    #       self.log some_value, :debug
    #     end
    #   end
    #   
    def loggable(*args)
      options = extract_options!(args)
      
      log_suffix = "_#{options[:with].to_s.strip.underscore}"
      
      # Set log file.
      self.remove_const :MODEL_LOG_FILE if defined?(::MODEL_LOG_FILE)
      self.const_set :MODEL_LOG_FILE, Rails.root.join('log', 'classes', "#{self.class.name.downcase}#{log_suffix}.log")
      
      # The actual log method for this class.
      def self.log(message, level = :info)
        level = :info if level.blank?
        @model_logger ||= ::ActiveSupport::BufferedLogger.new(::MODEL_LOG_FILE)
        @model_logger.send level.to_sym, "[#{self.class.name.downcase}:] #{level.to_s.capitalize} #{message}\n" 
      end
    end
    
    # Only perform the wrapped validations if a value is present (non-blank).
    #
    def validates_presence_of(attribute, &block)
      super attribute.to_sym
      with_options :allow_blank => true do |wo|
        wo.instance_eval &block
      end
    end
    
    # Extend all AR-models to respond to a default pagination per-page value.
    # Note: Overridable for each model of course.
    #
    def per_page
      if defined?(Settings)
        Settings.views.pagination.per_page
      else
        RAILS_DEFAULT_LOGGER.warn "** [warning:] ActiveRecord::Base: Settings not defined => default :per_page ignored."
      end
    end
    
    # Make helpers accessible from models in same way as controllers
    def helpers
      ActionController::Base.helpers
    end
    
    # Inspiration: http://www.elctech.com/tutorials/splitting-up-rails-models-to-different-databases
    #
    #   EXAMPLE:
    #
    #   class User < ActiveRecord::Base
    #     has_one :account
    #     delegate_attrs  :email, :time_zone, :country, :to => :account
    #   end
    #
    #   user = User.new
    #   user.email == user.account.email            # => true
    #   user.time_zone == user.account.time_zone    # => true
    #   user.country == user.account.country        # => true
    #
    
    def delegate_attrs(*attr_names)
      options = attr_names.pop
      attr_names.each do |attr_name|
        delegate attr_name, options
        delegate :"#{attr_name}?", options
        delegate :"#{attr_name}=", options
      end
    end
    
    # Build and create records unsafely, bypassing attr_accessible.
    
    def unsafe_build(attrs)
      record = new
      record.unsafe_attributes = attrs
      record
    end
    
    def unsafe_create(attrs)
      record = unsafe_build(attrs)
      record.save
      record
    end
    
    def unsafe_create!(attrs)
      unsafe_build(attrs).save!
    end
    
    def find_or_create_by(conditions = {})
      find_or(:create, conditions)
    end
    
    def find_or_new_by(conditions = {})
      find_or(:new, conditions)
    end
    
    protected
      
      def find_or(method, conditions)
        self.find(:conditions => conditions) || self.send(method, :conditions => conditions)
      end
      
  end
  
  module InstanceMethods
    
    def unsafe_update_attributes(attrs)
      self.unsafe_attributes = attrs
      self.save
    end
    
    def unsafe_update_attributes!(attrs)
      self.unsafe_attributes = attrs
      self.save!
    end
    
    def unsafe_attributes=(attrs)
      attrs.each do |k, v|
        send(:"#{k}=", v)
      end
    end
    
  end
  
end