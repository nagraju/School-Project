module AccountHelper
  
  def login_link(*args)
    options = args.extract_options!
    options.reverse_merge!(
        :label => t('formtastic.actions.account_session.new.submit')
      )
    session_type = args.first.is_a?(Symbol) ? args.shift : :standard
    
    case session_type
    when :standard
      link_to options[:label], new_account_session_path
    when :facebook
      options.reverse_merge!(
          :size => :large,
          :length => :long,
          :autologoutlink => false,
          :background => :white,
          :button => true
        )
      render '/accounts/helpers/fb_connect_login', :options => options
    end
  end
  
  def logout_link(*args)
    options = args.extract_options!
    options.reverse_merge!(
        :label => t('formtastic.actions.account_session.delete.submit')
      )
    session_type = args.first.is_a?(Symbol) ? args.shift : :standard
    
    # Use Facebook logout by default if the logged in user is FB-connected.
    session_type = :facebook if current_account && current_account.using_facebook_connect?
    
    case session_type
    when :standard
      link_to options[:label], destroy_account_session_path, :method => :delete
    when :facebook
      options.reverse_merge!(
          :size => :small,
          :length => :long,
          :background => :dark,
          :button => false
        )
      render '/accounts/helpers/fb_connect_logout', :options => options
    end
  end
  
end