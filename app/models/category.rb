class Category
  def self.for_select
    I18n.t(:"records.categories").collect { |k,v| [v[:name], k.to_s] } 
  end
end
