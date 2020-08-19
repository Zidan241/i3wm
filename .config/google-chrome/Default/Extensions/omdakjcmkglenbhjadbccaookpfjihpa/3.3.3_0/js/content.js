(function () {

var browserObj = (navigator.userAgent.indexOf("Chrome") > -1) ? chrome : browser;
var currentUrl = window.location.href;

function urlWatcher() {
  if (window.location.pathname.endsWith('/signed-up') ||
      window.location.pathname.endsWith('/logged-in')) {
    setTimeout(function() {
      browserObj.runtime.sendMessage({ toggled: true, country: "US" });
    }, 4000);
  }
  else {
    browserObj.runtime.sendMessage({ checkAuth: true });
  }
};

urlWatcher();
setInterval(function () {
  if (window.location.href !== currentUrl) {
    currentUrl = window.location.href;
    urlWatcher();
  }
}, 250);

})();