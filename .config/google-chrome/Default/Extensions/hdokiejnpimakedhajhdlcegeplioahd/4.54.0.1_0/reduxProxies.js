var proxyLegacyGlobals=function(){function c(e){try{e()}catch(e){console.log(e)}}function d(n,e,o){var u=null;return new Proxy(e,{set:function(e,r,t){return u||(u={},setTimeout(function(){c(function(){o(n,u)}),u=null})),e[r]=t,u[r]=t,!0}})}function e(e,n,o,u,r){var i=function(e){return e&&e[u]&&(!r||r(e))},s={};return new Proxy(e,{set:function(e,r,t){return e[r]=t,delete s[r],i(t)&&c(function(){n(t[u],t)}),!0},deleteProperty:function(e,r){var t=e[r],n=i(t);delete e[r],n&&c(function(){o(t[u])})},get:function(e,r){var t=e[r];return i(t)?(s[r]||(s[r]=d(t[u],t,n)),s[r]):e[r]}})}var r=function(e){return"http://group"!==e.url},t=function(e,r){var t={};for(var n in e)r(e[n])&&(t[n]=e[n]);return t};return function(){"undefined"!=typeof Proxy&&reduxApp&&(g_sites=e(g_sites,reduxApp.writeSite,reduxApp.removeSite,"aid",r),reduxApp.writeDataRecord&&(g_securenotes=e(g_securenotes,reduxApp.writeDataRecord,reduxApp.removeDataRecord,"aid")),g_shares=e(g_shares,reduxApp.writeSharedFolder,reduxApp.removeSharedFolder,"id"),reduxApp.writeBlob({sites:t(g_sites,r),notes:g_securenotes,sharedFolders:g_shares}))}}();