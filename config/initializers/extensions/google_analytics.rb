if defined?(Rubaidh::GoogleAnalytics) && Settings.api_keys.google_analytics.present?
  Rubaidh::GoogleAnalytics.tracker_id = Settings.api_keys.google_analytics
  Rubaidh::GoogleAnalytics.local_javascript = false
  Rubaidh::GoogleAnalytics.defer_load = true
  Rubaidh::GoogleAnalytics.legacy_mode = false
end