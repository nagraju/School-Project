class CasesController < InheritedResources::Base

  belongs_to :accountable, :polymorphic => true, :optional => true
  
  actions :index, :show, :new, :edit, :create, :update, :destroy
  respond_to :html, :js
  
  protected
    
    def begin_of_association_chain
      current_account.accountable
    end
    
    def collection
      paginate_options ||= {}
      paginate_options[:page] ||= (params[:page] || 1)
      paginate_options[:per_page] ||= (params[:per_page] || 20)
      @cases ||= end_of_association_chain.paginate(paginate_options)
    end
end
