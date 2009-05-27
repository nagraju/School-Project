module LiveValidations
  module ViewHelpers
    def self.included(base)
      base.alias_method_chain :form_for, :live_validations
    end
    
    def form_for_with_live_validations(record_name_or_array, *args, &block)
      options = args.extract_options!
      
      if options[:live_validations]
        record = case record_name_or_array
        when Array
          record_name_or_array.last
        when ActiveRecord::Base
          record_name_or_array
        when Symbol
          possible_instance = instance_variable_get("@#{record_name_or_array}")
          if possible_instance.is_a?(ActiveRecord::Base)
            possible_instance
          else
            raise InvalidFormBuilderObject, "`form_for(:some_symbol, :live_validations => true)` requires the instance variable `@some_symbol` to be assigned, and point to an active record instance."
          end
        else
          raise InvalidFormBuilderObject, "`form_for(x, :live_validotions => true)` requires `x` to be an array (e.g. [:admin, @post]) or an active record instance (e.g. @post) as its first argument. Got an instance of `#{record_name_or_array.class}`."
        end

        self.adapter_instance = LiveValidations.current_adapter.new(record)
        adapter_instance.handle_form_for_options(options)
        form_for_without_live_validations(record_name_or_array, *(args << options), &block)
        
        adapter_instance.perform_validations
        
        concat(%{<script type="text/javascript">#{adapter_instance.render_inline_javascript}</script>}, block.binding) if adapter_instance.utilizes_inline_javascript?
      else
        form_for_without_live_validations(record_name_or_array, *(args << options), &block)
      end
    end
    
    def adapter_instance=(record)
      @_adapter_instance = record
    end
    
    def adapter_instance
      @_adapter_instance
    end
  end
end