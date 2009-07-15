// ---------------------------------------------------
//  Require
// ---------------------------------------------------

// == Dependencies: General
//= require <jquery.tools>
//= require <jquery.livequery>

// == Dependencies: Forms
//= require <jquery.validate>
//= require <jquery.autofocus>
//= require <jquery.autogrow>
//= require <jquery.input_hint>

// == Dependencies: omponents
// require <jquery.live_paginate>

// ---------------------------------------------------
//  Initialize
// ---------------------------------------------------

jQuery(function()
{
  // Enhanced forms.
  jQuery('form').autofocus();
  jQuery('form textarea').autogrow();
  jQuery('form .hintable').hintable();
  
  // Enhanced pagination.
  //jQuery('.ajax.pagination').live_paginate();
});