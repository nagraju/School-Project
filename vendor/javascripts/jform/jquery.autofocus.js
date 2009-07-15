//= require <jquery>
/* 
 * jQuery Auto-Focus (0.1.0)
 * 
 * NOTE: This script requires jQuery to work. Download jQuery at http://jquery.com.
 * 
 * Copyright (c) 2009 Jonas Grimfelt, released under the MIT-license.
 * 
 */
(function($)
{
  $.fn.autofocus = function(options)
  {
    var e = $(':input:visible:enabled:first', this);
    e.focus();
    return e;
  };
})(jQuery);