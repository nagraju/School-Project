if defined?(SubdomainFu)
  SubdomainFu.tld_sizes = {
    :development => 0,
    :test => 0,
    :production => 1
  }
  # SubdomainFu.tld_size = 1 # sets for current environment
  # SubdomainFu.mirrors = %w(www) # Defaults to %w(www)
  SubdomainFu.preferred_mirror = nil
end