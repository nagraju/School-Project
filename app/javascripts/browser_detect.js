//
// Based on http://github.com/fnando/rails-js, fitting own purposes.
//
var BrowserDetect = {
  browserName: function() {
    var css_name = null;
    var ua = navigator.userAgent;
    var matches = null;
    
    if (ua.match(/firefox/i)) {
      css_name = "firefox";
    } else if (ua.match(/safari/i)) {
      css_name = "safari";
    } else if (matches = ua.match(/msie (\d+)/i)) {
      css_name = "ie ie" + matches[1];
      capable = parseInt(matches[1] || 0) >= 7;
    } else if (ua.match(/opera/i)) {
      css_name = "opera";
    } else if (ua.match(/mozilla/)) {
      css_name = "mozilla";
    }
    
    if (css_name) {
      // Set current browser identifier as body class.
      $("body").addClass(css_name)
      return css_name;
    }
  }
};