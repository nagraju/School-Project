# encoding: utf-8

module Authlogic
  module FacebookConnect
    module Session
      
      def self.included(klass)
        klass.class_eval do
          extend Config
          include Methods
        end
      end
      
      module Config
        
        # Should the user be saved with our without validations?
        #
        # The default behavior is to save the user without validations and then
        # in an application specific interface ask for the additional user 
        # details to make the user valid as facebook just provides a facebook id.
        #
        # This is useful if you do want to turn on user validations, maybe if you 
        # just have facebook connect as an additional authentication solution and 
        # you already have valid users.
        # 
        # * <tt>Default:</tt> true
        # * <tt>Accepts:</tt> Boolean
        #
        def facebook_valid_user(value = nil)
          rw_config(:facebook_valid_user, value, false)
        end
        alias :facebook_valid_user= :facebook_valid_user
        alias :facebook_valid_user? :facebook_valid_user
        
      end
      
      module Methods
        
        def self.included(klass)
          klass.class_eval do
            validate :validate_by_facebook_connect, :if => :authenticating_with_facebook_connect?
          end
          
          def credentials=(value)
            values = [:facebook_connect]
            super
          end
        end
        
        def facebook_valid_user?
          self.class.facebook_valid_user?
        end
        
        private
          
          def validate_by_facebook_connect
            facebook_session = controller.facebook_session
            
            self.attempted_record = klass.find(:first,
              :conditions => {:facebook_uid => facebook_session.user.uid})
              
            unless self.attempted_record
              begin
                # Get the user from facebook and create a local user.
                # We assign it after the call to new in case the attribute is protected.
                new_user = klass.new
                new_user.send(:'facebook_uid=', facebook_session.user.uid)
                
                # Callback: Before connect, aka before create/login.
                new_user.before_connect(facebook_session) if new_user.respond_to?(:before_connect)
                
                self.attempted_record = new_user
                
                if facebook_valid_user?
                  self.errors.add_to_base(::Authlogic::I18n.t('error_messages.facebook_user_creation_failed',
                      :default => "There was a problem creating a new user for your Facebook account")
                    ) unless self.attempted_record.valid?
                    
                  self.attempted_record = nil
                else
                  self.attempted_record.save_with_validation(false)
                end
              rescue ::Facebooker::Session::SessionExpired
                self.errors.add_to_base(::Authlogic::I18n.t('error_messages.facebooker_session_expired', 
                  :default => "Your Facebook Connect session has expired, please reconnect."))
              end
            end
          end
          
          def authenticating_with_facebook_connect?
            controller.set_facebook_session
            self.attempted_record.nil? && self.errors.blank? && controller.facebook_session
          end
          
      end
      
    end
  end
end
