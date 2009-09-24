# encoding: utf-8

# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  
  # Generate secure e-mail link using JavaScript,
  # i.e. very hard to detect for bots.
  #
  # == Usage:
  #   secure_mail_to 'support@example.com', 'Contact'
  #
  def secure_mail_to(email, name = nil)
    return name if email.blank?
    mail_to email, name, :encode => 'javascript'
  end
  
  # Semantic markup helper for timestamps.
  #
  # == Features:
  #   * Semantic
  #   * Localized
  #   * Cachable - also as "time ago" format, using client-side refreshing with <jquery.timeago>
  # == Usage:
  #   timestamp(@post.created_at)  # => <abbr class="datetime" title="YYYY-MM-DDTHH:MM:SS+ZZ:ZZ">YYYY-MM-DDTHH:MM:SS+ZZ:ZZ</abbr>
  #   timestamp(@post.created_at, true)  # => <abbr class="datetime timeago" title="YYYY-MM-DDTHH:MM:SS+ZZ:ZZ">about a year ago</abbr>
  #
  def timestamp(datetime, timeago = false)
    element_class = ['datetime']
    if timeago
      valid_datetime = [::ActiveSupport::TimeWithZone, ::DateTime].any? { |dtc| datetime.is_a?(dtc) }
      datetime = datetime.time_ago_in_words(valid_datetime ? datetime : Time.now)
      element_class << 'timeago'
    else
      datetime = datetime.to_s(:long)
    end
    content_tag(:abbr, datetime, :class => element_class.join(' '), :title => datetime.iso8601.to_s)
  end
  
  # A more rough version of Object#try(), catching chain
  #
  # == Usage:
  #   try_chain { @post.author.comments.first.body }  # => returns nil if no such thing, otherwise requested value
  #   try_chain(true) { @post.author.comments.first.body }  # => same as above, but rescue all kinds of exceptions
  #
  # Inspiration: http://github.com/ssoroka/ignore_nil
  #
  def try_chain(hard = false, &block)
    begin
      yield
    rescue NoMethodError, RuntimeError => e
      if hard
        return nil
      else
        case e.message
        when /You have a nil object when you didn't expect it/
        when /undefined method `.*?' for nil:NilClass/
        when /^Called id for nil/
          return nil
        else
          raise e
        end
      end
    end
  end
  
end