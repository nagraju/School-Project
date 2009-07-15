module AuthlogicExtensions
  module Model
    module OptionalLoginField
#       
#       validates_uniqueness_of :login, :case_sensitive => false,
#         :allow_nil => true, :allow_blank => false
#         
#       def self.find_by_smart_case_login_field(login)
#         field_name = (login =~ Authlogic::Regex.email) ? :email : :login
#         attr_value = send(field_name.to_sym).downcase
#         first(:conditions => ["LOWER(#{quoted_table_name}.#{field_name}) = ?", attr_value])
#       end
    end
  end
end
