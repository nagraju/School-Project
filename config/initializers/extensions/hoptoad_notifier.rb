if defined?(HoptoadNotifier)
  HoptoadNotifier.configure do |config|
    config.api_key = Settings.api_keys.hoptoad
  end
  
  # Only notify Hoptoad in production.
  unless Rails.env.to_sym == :production
    module HoptoadNotifier::Catcher
      def notify(thing)
        # do nothing
      end
    end
  end
end