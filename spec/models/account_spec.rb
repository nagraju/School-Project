require File.expand_path(File.join(File.dirname(__FILE__), '..', 'spec_helper'))

describe Account do
  
  before(:each) do
    @valid_attributes = {
      :email                  => 'jonas@example.com',
      :password               => '123456',
      :password_confirmation  => '123456'
    }
  end
  
  should_validate_presence_of :email, :password
  should_validate_confirmation_of :password
end