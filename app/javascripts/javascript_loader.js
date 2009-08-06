//
// Usage:
//
//    <script type="text/javascript" src="http://example.com/javascripts/javascript_loader.js"></script>
//    <script type="text/javascript">
//      loadScript("http://example.com/javascripts/application.js", function() {
//        // initialization code
//      });
//    </script>
//
// Reference: http://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript
//
function loadScript(url, callback) {
  
  var script = document.createElement("script")
  script.type = "text/javascript";
  script.src = url;
  
  if (script.readyState) { // IE
      script.onreadystatechange = function() {
          if (script.readyState == "loaded" || script.readyState == "complete") {
              script.onreadystatechange = null;
              script.onloadDone = true;
              callback();
          }
      };
  } else { // Others
      script.onload = function(){
        script.onloadDone = true;
        callback();
      };
  }
  
  document.documentElement.insertBefore(script, document.documentElement.firstChild);
}