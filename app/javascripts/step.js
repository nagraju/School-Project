// = require <jquery>

// See: http://www.webdesignerwall.com/tutorials/jquery-sequential-list/

jQuery(document).ready(function(){
  
  jQuery('#step li').each(function (i) {
    i = i + 1;
    jQuery(this).addClass('item' + i);
   });
   
});