# encoding: utf-8
gem 'w3c_validators', '>= 0.9.3'
require 'w3c_validators'

#
# INSPIRATION: http://mediumexposure.com/techblog/w3c-validation-functional-tests-shoulda-macros
#   
# EXAMPLE:
#   
#   context "on /index" do
#     setup do
#       get :index
#     end
#     
#     should_respond_with :success
#     should_assign_to    :assets
#     should_render_with_layout
#     should_pass_w3c_validation    # <= W3C validation
#   end
#

ActionController::TestCase.class_eval do
  
  include W3CValidators
  
  def should_pass_w3c_validation
    should "pass w3c validation" do
      tempfile = Tempfile.new('test')
      tempfile.write(@response.body)
      tempfile.flush
      
      sleep 0.5 # Take a nap
      
      validator = MarkupValidator.new
      results = validator.validate_file(tempfile.path)
      valid = [results.errors, results.warnings].all?{ |set| set.size == 0 }
      fail_text = ''
      unless valid
        fail_text = (results.errors + results.warnings).inject('') do |text, message|
          message = message.to_s.sub(/URI:[^;]+;/, '')
          text << "\n#{message}"
        end
      end
      assert valid, fail_text
    end
  end
  
end
