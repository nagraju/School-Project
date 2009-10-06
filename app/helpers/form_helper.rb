# encoding: utf-8

module FormHelper
  
  # Puts error messages where they should be put in this certain app, 
  # i.e. not necessary within the form (as the form builer default behaviour).
  #
  def flash_form_error(form, base_errors = false)
    error_message = base_errors ? form.errors_on(:base) : form.error_messages
    content_for(:flash, error_message) if Settings.views.forms.error_messages
  end
  
  # Generates a "better" form submit button, with I18n and some defaults.
  #
  def submit_button(form, text, options = {})
    button_label = text || t('.submit')
    button_working_label = I18n.t('formtastic.processing', :default => 'Please wait...')
    button_class = [
        'action default',
        options[:class]
      ].compact.join(' ')
      
    form.commit_button button_label, :button_html => {
        :disable_with => button_working_label,
        :name => nil,
        :class => button_class
      }
  end
  
  # Generates a "better" form cancel button, with I18n and some defaults.
  #
  def cancel_button
    # TODO: Formtastic DSL don't support "cancel"-buttons yet, monkey-patch or fast-hack needed.
  end
  
end