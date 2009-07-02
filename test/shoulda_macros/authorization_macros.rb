
#
# EXAMPLE:
#   
#   %w[client developer].each do |role|
#     context "A #{role} user" do
#       setup do
#         login_as(user = create_user)
#         @project.create_role_for!(user, role)
#       end
#       
#       should_not_allow :destroy, "@project"
#       should_not_allow :edit, "@project"
#     end
#   end
#

Test::Unit::TestCase.class_eval do
  
  def self.should_not_allow(action, object, msg = nil)
    msg ||= "a #{object.class.name.downcase}" 
    should "not be able to #{action} #{msg}" do
      object = eval(object, self.send(:binding), __FILE__, __LINE__)
      get action, :id => object.id
      assert_response 404
    end
  end
  
  def self.should_allow(action, object, msg = nil)
    msg ||= "a #{object.class.name.downcase}" 
    should "be able to #{action} #{msg}" do
      object = eval(object, self.send(:binding), __FILE__, __LINE__)
      get action, :id => object.id
      assert_response :success
    end
  end
  
end