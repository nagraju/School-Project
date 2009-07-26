# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  
  def secure_mail_to(email, name = nil)
    return name if email.blank?
    mail_to email, name, :encode => 'javascript'
  end
  
end