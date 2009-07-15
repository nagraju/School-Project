module App
  
  def current_database
    if ActiveRecord::Base.connection.respond_to?(:current_database)
      ActiveRecord::Base.connection.current_database
    else
      ActiveRecord::Base::configurations[Rails.env][:database]
    end
  end
  
  def deployed_revision
    read_deploy_info('REVISION')
  end
  
  def deployed_date
    read_deploy_info('DATE')
  end
  
  private
    
    def read_deploy_info(filename)
      File.exists?(File.join(RAILS_ROOT, filename)) ? File.open(file).read.strip : nil
    end
    
  extend self
  
end