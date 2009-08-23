// ---------------------------------------------------
//  Require
// ---------------------------------------------------

// == Dependencies: General
//= require <jquery.tools>
//= require <jquery.livequery>

// == Dependencies: Forms
//= require <jquery.validate>
//= require <jquery.autofocus>
//= require <jquery.input_hint>
//= require <jquery.elastic>
//= require <jquery.truncator>

// == Dependencies: Images
//= require <jquery.lazyload>

// == Dependencies: Dialogs/Popups
// require <jquery.qtip>

// == Dependencies: String/Text
//= require <jquery.timeago>
//= require <jquery.truncator>
//= require <hyphenator>

// == Localization: en
//= require <hyphenator.en>
//= require <jquery.timeago.en>

// == Application
// require <jquery.live_paginate>
//= require <step>
//= require <debug>

// ---------------------------------------------------
//  Initialize
// ---------------------------------------------------

jQuery(function()
{
  // Lazy-load images.
  jQuery('img').lazyload();
  
  // Enhanced forms.
  jQuery('form').autofocus();
  jQuery('form .hintable').hintable();
  jQuery('form textarea').elastic();
  //jQuery('form textarea').limit('128','#chars_left');
  
  // More/less-links for truncated text. TODO: Localized strings.
  jQuery('.expandable').truncate({max_length: 25, more: 'More&hellip;', less: 'Less'});
  
  // Fuzzy timestamps, e.g. "4 minutes ago".
  jQuery('abbr.timeago').timeago();
  
  // Hyphenation of paragraph text.
  Hyphenator.config({displaytogglebox: true});
  Hyphenator.run();
  
  // Enhanced pagination.
  //jQuery('.ajax.pagination').live_paginate();
});
