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
//= require <chroma-hash>

// == Dependencies: Components
// require <jquery.live_paginate>

//= require <debug>

// ---------------------------------------------------
//  Initialize
// ---------------------------------------------------

jQuery(function()
{
  // Enhanced forms.
  jQuery('form').autofocus();
  jQuery('form textarea').autogrow();
  jQuery('form .hintable').hintable();
  //jQuery('input:password').chromaHash({number: 3});
  
  // Enhanced pagination.
  //jQuery('.ajax.pagination').live_paginate();
});