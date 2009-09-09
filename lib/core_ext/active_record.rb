class ActiveRecord::Base
  def self.included(base)
    base.class_eval do
      extend ClassMethods
      include InstanceMethods
    end
  end
  
  module ClassMethods
    
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