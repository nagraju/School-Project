# Documentation: http://docs.jquery.com/Plugins/Validation/validate#toptions
if defined?(LiveValidations)
  LiveValidations.use :jquery_validations, :validator_settings => {
      :debug => false,
      :onsubmit => true,
      :errorClass => 'invalid'
    }
end