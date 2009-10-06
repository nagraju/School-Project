module Authlogic
  module FacebookConnect
    module Controller
      
      mattr_accessor :enable_set_facebook_session
      #alias :enable_set_facebook_session? :enable_set_facebook_session
      @@enable_set_facebook_session ||= false
      
      def self.included(klass)
        klass.class_eval do
          before_filter :set_facebook_session if ::Authlogic::FacebookConnect::Controller.enable_set_facebook_session
          helper_method :facebook_session
        end
      end
      
    end
  end
end