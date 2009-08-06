module AuthHelpers
  module Model
    module Updatable
      def self.included(base)
        base.send :attr_accessor, :password_confirmation
        base.send :attr_accessible, :email, :password, :password_confirmation
        base.send :validates_confirmation_of, :password, :allow_blank => true
      end
      
      def update_attributes(options)
        options.delete(:email)              if options[:email] == self.email
        options.delete(:email_confirmation) if options[:email_confirmation].blank?
        
        options.delete(:password)              if options[:password].blank? || self.valid_password?(options[:password])
        options.delete(:password_confirmation) if options[:password_confirmation].blank?
        
        # Force confirmations (if confirmation is nil, it won't validate, it has to be at least blank)
        options[:email_confirmation]    ||= '' if options[:email]
        options[:password_confirmation] ||= '' if options[:password]
        
        if super(options)
          if options[:email] && self.respond_to?(:send_confirmation_instructions)
            self.send_confirmation_instructions(:update)
          end
          return true
        end
        
        return false
      end
    end
  end
end