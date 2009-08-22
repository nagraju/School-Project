# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  
  def secure_mail_to(email, name = nil)
    return name if email.blank?
    mail_to email, name, :encode => 'javascript'
  end
  
  def timestamp(datetime = Time.now, timeago = false)
    if timeago
      datetime = datetime.time_ago_in_words(timeago.is_a?(DateTime) ? timeago : Time.now)
    else
      datetime = datetime.to_s(:long)
    end
    content_tag(:abbr, datetime, :title => datetime.iso8601.to_s)
  end
  
end