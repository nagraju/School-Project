# encoding: utf-8

module UrlHelper
  
  def current?(controller_expression = nil, action_expression = nil, params_expressions = nil)
    current = true
    if controller_expression
      current &&= if controller_expression.is_a?(String)
        controller.controller_name == controller_expression.strip
      else
        controller.controller_name =~ controller_expression
      end
    end
    if action_expression
      current &&= if action_expression.is_a?(String)
        controller.action_name == action_expression.strip
      else
        controller.action_name =~ action_expression
      end
    end
    if params_expressions
      current &&= params_expressions.all? do |key, value|
        value.is_a?(String) ? params[key] == value : params[key] =~ value
      end
    end
    current
  end
  
  def return_to_url
    session[:return_to]
  end
  
  def action_link(action, object, options = {})
    # TODO
  end
  
  def link_to_back(text = I18n.t('actions.back', :default => "&laquo; Back"))
    link_to(text, :back, :class => 'button small')
  end
  
end