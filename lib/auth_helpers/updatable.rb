# encoding: utf-8

# TODO: Submit a generic solution on this as a AuthHelpers-patch,
# i.e. optional e-mail-confirmation - not a good default.
#
module AuthHelpers
  module Model
    module Updatable
      def self.included(base)
        base.send :attr_accessor, :password_confirmation
        base.send :attr_accessible, :email, :password, :password_confirmation
        base.send :validates_confirmation_of, :password, :allow_blank => true #, :unless => :has_no_credentials?
      end
      
      def update_attributes(options)
        # options.delete(:login) if options[:login] == self.login
        # If specified e-mail is identical, skip.
        options.delete(:email) if options[:email] == self.email
        # removed: options.delete(:email_confirmation) if options[:email_confirmation].blank?
        
        if self.password.present?
          options.delete(:password)              if options[:password].blank? || self.valid_password?(options[:password])
          options.delete(:password_confirmation) if options[:password_confirmation].blank?
        end
        
        # Force confirmations (if confirmation is nil, it won't validate, it has to be at least blank)
        # removed: options[:email_confirmation]    ||= '' if options[:email]
        options[:password_confirmation] ||= '' if options[:password]
        
        if super(options)
          if options[:email].present? && self.respond_to?(:send_confirmation_instructions)
            self.send_confirmation_instructions(:update)
          end
          return true
        end
        
        return false
      end
    end
  end
end