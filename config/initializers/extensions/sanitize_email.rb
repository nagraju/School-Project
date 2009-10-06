# Settings for sanitize_email plugin:
# Overrides the recipients of all outgoing mail in local environments
ActionMailer::Base.sanitized_recipients = Settings.debugging.sanitize_email.recipients

# Overrides the BCC of all outgoing mail in local environments,
# but only if a BCC is specified on the message
ActionMailer::Base.sanitized_bcc = Settings.debugging.sanitize_email.bcc_recipients
# Or you can override bcc's with a nil value thereby ignoring the bcc in mail sent from the local_enviroments
# ActionMailer::Base.sanitized_bcc = nil

# Overrides the CC of all outgoing mail in local environments,
# but only if a CC is specified on the message
ActionMailer::Base.sanitized_cc = Settings.debugging.sanitize_email.cc_recipients
# Or you can override cc's with a nil value thereby ignoring the cc in mail sent from the local_enviroments
# ActionMailer::Base.sanitized_cc = nil

# These are the environments whose outgoing email BCC, CC and
# recipients fields will be overridden!  All environments not listed will be treated as normal.
ActionMailer::Base.local_environments = %w(development)