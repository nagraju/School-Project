# encoding: utf-8
#
# EXAMPLE:
#
#   logged_in_as :customer do
#     # tests for customers
#   end
#   
#

ActiveSupport::TestCase.class_eval do
  
  # Sets the current user in the session from the users fixtures. TODO: Machinist...
  def logged_in_as(user, &block)
    context "logged in as #{user}" do
      setup do
        @request.session[:user] = users(user).id
      end
      
      merge_block(&block)
    end
  end
  
end