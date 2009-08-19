module AuthHelpers
  module Controller
    class Confirmable < ::ApplicationController
      unloadable

      include ::InheritedResources::BaseHelpers
      include ::AuthHelpers::Controller::Helpers

      class << self
        alias :has_confirmable :set_class_accessors_with_class
      end

      # GET /account/confirmation/new
      def new(&block)
        object = get_or_set_with_send(:new)
        respond_to(:with => object, &block)
      end
      alias :new! :new

      # POST /account/confirmation
      # POST /account/confirmation.xml
      def create(&block)
        object = get_or_set_with_send(:find_and_resend_confirmation_instructions, params[self.instance_name])
        respond_block, redirect_block = select_block_by_arity(block)

        if object.errors.empty?
          set_flash_message!(:notice, I18n.t('actionmailer.auth_helpers.confirmations.create.notice',
              :default => 'We sent confirmation instructions to your email, please check your inbox.',
              :resource_name => '{{resource_name}}'))
          
          respond_to_with_dual_blocks(true, block) do |format|
            format.html { redirect_to_block_or_scope_to(redirect_block, :session) }
            format.all  { head :ok }
          end
        else
          set_flash_message!(:error)
          options = { :with => object.errors, :status => :unprocessable_entity }

          respond_to_with_dual_blocks(false, block, options) do |format|
            format.html { render :action => 'new' }
          end
        end
      end
      alias :create! :create

      # GET /account/confirmation?account[perishable_token]=xxxx
      # GET /account/confirmation.xml?account[perishable_token]=xxxx
      def show(&block)
        object = get_or_set_with_send(:find_and_confirm, params[self.instance_name])
        respond_block, redirect_block = select_block_by_arity(block)

        if object.errors.empty?
          set_flash_message!(:notice, I18n.t('actionmailer.auth_helpers.confirmations.show.notice',
              :default => '{{resource_name}} was successfully confirmed.',
              :resource_name => '{{resource_name}}'))
              
          respond_to_with_dual_blocks(true, block) do |format|
            format.html { redirect_to_block_or_scope_to(redirect_block, :session) }
            format.all  { head :ok }
          end
        else
          set_flash_message!(:error, object.errors.on(:perishable_token))
          options = { :with => object.errors, :status => :unprocessable_entity }

          respond_to_with_dual_blocks(false, block, options) do |format|
            format.html { redirect_to :action => 'new' }
          end
        end
      end
      alias :show! :show

      protected :show!, :new!, :create!
    end
  end
end
