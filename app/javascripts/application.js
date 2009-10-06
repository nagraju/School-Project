// ---------------------------------------------------
//  Require
// ---------------------------------------------------

// == General
//= require <jquery.tools>
//= require <jquery.livequery>

// == Forms
//= require <jquery.validate>
//= require <jquery.autofocus>
//= require <jquery.input_hint>
//= require <jquery.elastic>
//= require <jquery.truncator>

// == Images
//= require <jquery.lazyload>

// == Dialogs/Popups
// require <jquery.qtip>

// == String/Text
//= require <jquery.timeago>
//= require <jquery.truncator>
//= require <hyphenator>
//= require <cufon>

// == Keyboards
//= require <jquery.shortkeys>

// == Fonts (Cufon)
//= require <Tuffy_500-Tuffy_700-Tuffy_italic_500-Tuffy_italic_700.font>

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
  
  // Cufonize H1-headers.
  Cufon.replace('h1');
  
  // Keyboard shortcuts
  jQuery(document).shortkeys({
    ',+.': function () { jQuery('#debug_toolbar').toggle(); }
  });
  
  // Enhanced pagination.
  //jQuery('.ajax.pagination').live_paginate();
  
});
