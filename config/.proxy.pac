// Enables wildcard subdomain support in Firefox/Safari on localhost
//
// Firefox: Preferences/Advanced/Network/Connection Settings and enter the file name file:///Users/USERNAME/.proxy.pac
// Safari: Preferences/Advanced/Proxy settings select Use a PAC file and enter file://localhost/Users/USERNAME/.proxy.pac
//
function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.app.local")) {
    return "PROXY app.local";
  }
  return "DIRECT";
}