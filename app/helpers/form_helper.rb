module FormHelper
  
  def flash_form_error(form)
    content_for(:flash, form.error_messages) if Settings.views.forms.error_messages
  end
  
  def submit_button(form, text)
    form.commit_button text || t('.submit'), :button_html => {
        :disable_with => I18n.t('formtastic.processing')
      }
  end
  
  def cancel_button
    # TODO
  end
  
end