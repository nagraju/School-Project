//= require <jquery>
//= require <jquery.will_paginate>

jQuery(document).ready(function($) {
  $('.ajax.pagination a').livequery('click', function() {
    $('body').load(this.href)
    return false
  });
});