# Facebook Connect button config: http://facebooker.pjkh.com/helpers/fb_login_button

module FacebookConnectHelper
  
  def facebook_connect_initializers
    fb_connect_javascript_tag + init_fb_connect('XFBML', :js => :jquery)
  end
  
  def facebook_connect_button
    authlogic_facebook_login_button :controller => 'accounts/sessions'
  end
  
end