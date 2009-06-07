//= require <jquery>
/* 
 * jQuery Input Hint (0.1.0)
 * 
 * NOTE: This script requires jQuery to work. Download jQuery at http://jquery.com.
 * 
 * Copyright (c) 2009 Jonas Grimfelt, released under the MIT-license.
 * 
 */
(function($)
{
  $.fn.hintable = function(options)
  {
    var hintable = this;
    
    hintable.each(function()
    {
      var e = $(this);
      
      hintable.focus(function()
      {
        if (e.val() == e[0].title)
        {
          e.removeClass('hint');
          e.val('');
        }
      });
      
      hintable.blur(function()
      {
        if (e.val() == '')
        {
          e.addClass('hint');
          e.val(e[0].title);
        }
      });
      
      hintable.blur();
    });
    
    return hintable;
  };
})(jQuery);