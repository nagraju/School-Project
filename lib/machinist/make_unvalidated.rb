module Machinist
  module Extensions
    def self.make_unvalidated(*args)
      self.make_unsaved(*args).save(false)
    end
  end
end

ActiveRecord::Base.send :include, Machinist::Extensions