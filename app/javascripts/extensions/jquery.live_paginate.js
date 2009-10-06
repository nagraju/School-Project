//= require <jquery>
/* 
 * jQuery Live Paginate (0.1.0)
 * 
 * NOTE: This script requires jQuery to work. Download jQuery at http://jquery.com.
 * 
 * Copyright (c) 2009 Jonas Grimfelt, released under the MIT-license.
 * 
 */
(function($)
{
  $.fn.live_paginate = function(options)
  {
    var pagination = this;
    
    pagination.children('a').livequery('click', function()
    {
      $('body').load(this.href);
      return false;
    });
    
    return pagination;
  };
})(jQuery);