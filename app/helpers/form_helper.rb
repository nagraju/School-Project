module FormHelper
  
  def flash_form_error(form)
    content_for(:flash, form.error_messages) if Settings.preferences.forms.error_messages
  end
  
end