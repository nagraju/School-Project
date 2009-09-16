module AccountHelper
  
  def login_link(*args)
    options = args.extract_options!
    type = args.first.is_a?(Symbol) ? args.shift : :standard
    
    case type
    when :standard
      link_to 'Login', new_account_session_path
    when :facebook
      options.reverse_merge!(
          :size => :medium,
          :autologoutlink => true,
          :background => :white
        )
      render '/accounts/helpers/fb_connect_login', :options => options
    end
  end
  
  def logout_link(*args)
    options = args.extract_options!
    type = args.first.is_a?(Symbol) ? args.shift : :standard
    type = :facebook if current_account && current_account.using_facebook_connect?
    
    case type
    when :standard
      link_to 'Logout', destroy_account_session_path, :method => :delete
    when :facebook
      options.reverse_merge!(
          :switch => false,
          :size => :small,
          :autologoutlink => true,
          :background => :dark
        )
      render '/accounts/helpers/fb_connect_logout', :label => 'Logout', :options => options
    end
  end
  
end