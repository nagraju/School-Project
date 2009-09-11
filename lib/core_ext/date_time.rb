# encoding: utf-8

class DateTime
  
  def time_ago_in_words_from(relative_date_time, options = {})
    sentence = distance_of_time_in_words(I18n.l(relative_date_time), self)
  end
  
  def time_ago_in_words_from_now(options = {})
    self.time_ago_in_words_from(Time.now, options)
  end
  
end