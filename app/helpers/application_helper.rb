# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  
  def flash_message
    if flash[:error]
      %[<div id="flash_message" class="error_flash"><p>#{flash[:error]}</p></div>]
    elsif flash[:warn]
      %[<div id="flash_message" class="warn_flash"><p>#{flash[:warn]}</p></div>]
    elsif flash[:notice]
      %[<div id="flash_message" class="notice_flash"><p>#{flash[:notice]}</p></div>]
    end
  end
  
end
