# Inspiration: http://www.elctech.com/tutorials/splitting-up-rails-models-to-different-databases
#
#   EXAMPLE:
#
#   class User < ActiveRecord::Base
#     has_one :account
#     delegate_attrs  :email, :time_zone, :country, :to => :account
#   end
#
#   user = User.new
#   user.email == user.account.email            # => true
#   user.time_zone == user.account.time_zone    # => true
#   user.country == user.account.country        # => true
#
class ActiveRecord::Base
  def self.delegate_attrs(*attr_names)
    options = attr_names.pop
    attr_names.each do |attr_name|
      delegate attr_name, options
      delegate :"#{attr_name}?", options
      delegate :"#{attr_name}=", options
    end
  end
end