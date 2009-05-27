module Accounts
  module Filters
    def self.included(base)
      base.send :before_filter, :find_current_account
    end
    
    protected
      
      def current_account_session
        @current_account_session ||= AccountSession.find
      end
      
      def find_current_account
        @current_account ||= current_account_session && current_account_session.account
      end
      
      def require_account
        unless find_current_account
          store_location
          add_to_flash_if_empty_or_update :warn, I18n.t('flash.accounts.filters.require_account')
          redirect_to new_account_session_url
        end
      end
      
      def require_no_account
        redirect_to(account_url) if find_current_account
      end
      
  end
end
