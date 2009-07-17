module App
  
  def current_database_adapter
    db_adapter = ActiveRecord::Base::configurations[Rails.env]['adapter']
  end
  
  def current_database
    db_connection = ActiveRecord::Base.connection
    db_name = ActiveRecord::Base::configurations[Rails.env]['database']
    
    if db_connection.respond_to?(:current_database)
      (db_connection.current_database || db_name)
    else
      db_name
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