class CompaniesController < InheritedResources::Base
  
  actions :index, :show, :new, :edit, :create, :update, :destroy
  respond_to :html, :js
  def new
    @company = Company.new
    @company.company_contacts.build
#    new!
  end
  
#  def create
#    @company = Company.new(params[:company])
#    @company.company_contacts << @company.company_contacts.build(params[:company][:company_contact])
#    create! 
#  end
  protected
    def collection
      paginate_options ||= {}
      paginate_options[:page] ||= (params[:page] || 1)
      paginate_options[:per_page] ||= (params[:per_page] || 20)
      @companies ||= end_of_association_chain.paginate(paginate_options)
    end
end
