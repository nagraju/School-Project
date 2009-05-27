# Documentation: http://docs.jquery.com/Plugins/Validation/validate#toptions
LiveValidations.use :jquery_validations, :validator_settings => {
    :debug => false,
    :onsubmit => true,
    :errorClass => 'invalid'
  }