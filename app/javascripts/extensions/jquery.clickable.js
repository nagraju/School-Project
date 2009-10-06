//= require <jquery>
/* 
 * jQuery Clickable (0.1.0)
 *
 * NOTE: This script requires jQuery to work. Download jQuery at http://jquery.com.
 * 
 * Copyright (c) 2009 Jonas Grimfelt, released under the MIT-license.
 * 
 * Based on snippet by Emil Stenström: http://friendlybit.com/js/make-a-div-clickable/
 * 
 */
(function($)
{
  $.fn.clickable = function(options)
  {
    var clickable = this;
    
    clickable.each(function()
    {
      var e = $(this);
      
      e.click(function()
      {
        window.location = $(this).find('a:first').attr('href')
      });
      
      e.hover(function()
      {
        window.status = $(this).find('a:first').attr('href')
      }, function()
      {
        window.status = ''
      });
      
      e.addClass('anchor');
    });
    
    return clickable;
  };
})(jQuery);