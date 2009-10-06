# encoding: utf-8
#
# EXAMPLE:
#   
#   class PostTest < ActiveSupport::TestCase
#     # ...
#     should_have_per_page 10
#   end
#   

ActiveSupport::TestCase.class_eval do
  
  def should_paginate_collection(collection_name)
    should "paginate #{collection_name}" do
      assert collection = assigns(collection_name), "Controller isn't assigning to @#{collection_name}"
      assert_kind_of WillPaginate::Collection, collection
    end
  end
  
  def should_not_paginate_collection(collection_name)
    should "not paginate #{collection_name}" do
      assert collection = assigns(collection_name), "Controller isn't assigning to @#{collection_name}"
      assert_not_equal WillPaginate::Collection, collection.class
    end
  end
  
  def should_have_per_page(count)
    klass = self.name.gsub(/Test$/, '').constantize
    context "#{klass}" do
      should "respond to per_page" do
        assert klass.respond_to?(:per_page), "#{klass} does not respond to :per_page"
      end
      
      should "have #{count} per page" do
        assert_equal count, klass.per_page
      end
    end
  end
  
end
