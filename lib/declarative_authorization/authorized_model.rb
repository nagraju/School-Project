# encoding: utf-8

module DeclarativeAuthorization
  module AuthorizedModel
    
    def self.included(klass)
      klass.class_eval do
        include InstanceMethods
      end
    end
    
    module InstanceMethods
      
      # The necessary method for the plugin to find out about the role symbols
      # Roles returns e.g. [:admin]
      #
      def role_list
        @role_list ||= (self.roles || []).collect { |role| role.title.to_sym }
      end
      alias :role_symbols :role_list
      
      # Check if this account has a certain role.
      #
      def has_role?(title)
        self.role_list.include?(:admin) || self.role_list.include?(title.to_sym)
      end
      
    end
    
  end
end