# encoding: utf-8

module Authlogic
  module FacebookConnect
    module ActsAsAuthentic
      
      def self.included(klass)
        klass.class_eval do
          extend Config
          add_acts_as_authentic_module(Methods, :prepend)
        end
      end
      
      module Config
        
        # nothing
        
      end
      
      module Methods
        
        def self.included(klass)
          unless klass.column_names.include?('facebook_uid')
            RAILS_DEFAULT_LOGGER.debug '** [authlogic/facebook_connect:] Attribute :facebook_uid not defined.'
            return
          end
          
          klass.class_eval do
            password_validation_options = {:if => :validate_password_with_facebook_connect?}
            
            validates_uniqueness_of :facebook_uid, :scope => validations_scope, :if => :using_facebook_connect?
            validates_length_of_password_field_options validates_length_of_password_field_options.merge(
                password_validation_options
              )
            validates_confirmation_of_password_field_options validates_confirmation_of_password_field_options.merge(
                password_validation_options
              )
            validates_length_of_password_confirmation_field_options validates_length_of_password_confirmation_field_options.merge(
                password_validation_options
              )
            validates_format_of_email_field_options merge_validates_format_of_email_field_options(
                password_validation_options
              )
            validates_length_of_email_field_options merge_validates_length_of_email_field_options(
                password_validation_options
              )
          end
        end
        
        # Find account for Facebook UID, and store session.
        #
        def self.for(facebook_id, facebook_session = nil)
          returning self.find_or_create_by_facebook_id(facebook_id) do |user|
            user.store_session(facebook_session.session_key) unless facebook_session.nil?
          end
        end
        
        # Recreate session - sometimes needed.
        #
        def facebook_session
          return nil if facebook_session_key.blank?
          @facebook_session ||= returning ::Facebooker::Session.create do |session| 
            session.secure_with!(facebook_session_key, facebook_id, 1.hour.from_now) 
            ::Facebooker::Session.current = session
          end
        end
        
        def store_session(session_key)
          if self.session_key != session_key
            update_attribute(:session_key,session_key)
          end
        end
        
        protected
          
          # Checks if this user model has Facebook Connect enabled, and
          # has a Facebook UID saved.
          #
          def using_facebook_connect?
            self.respond_to?(:facebook_uid) && self.facebook_uid.present?
          end
          
          def validate_password_with_facebook_connect?
            !self.using_facebook_connect? && self.send(:require_password?)
          end
          
          def validate_email_with_facebook_connect?
            self.using_facebook_connect? ? self.email.present? : true
          end
          
      end
      
    end
  end
end