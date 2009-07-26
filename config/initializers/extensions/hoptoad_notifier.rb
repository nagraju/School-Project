if defined?(HoptoadNotifier) && Settings.api_keys.hoptoad.present?
  HoptoadNotifier.configure do |config|
    config.api_key = Settings.api_keys.hoptoad
    
    # Track 404s
    if Settings.debugging.hoptoad.track_404s
      config.ignore_only = [ActiveRecord::RecordNotFound,
                            ActionController::InvalidAuthenticityToken]
    end
  end
  
  # Only notify Hoptoad in production.
  unless Rails.env?(:production)
    module HoptoadNotifier::Catcher
      def notify(thing)
        # do nothing
      end
    end
  end
end