console.log("Hello from service worker!");

// Static cache
const CACHE_NAME = "static-cache-v2";
// data caches
const DATA_CACHE_NAME = "data-cache-v1";
// files to caches
const FILES_TO_CACHE = [
  "./index.hmtl",
  "./style.css",
  "./manifest.webmanifest",
  "/icons/icon-192x192.png",
  "/icons/icon-192x192.png",
  "/style.css",
];
// install
self.addEventListener("install", function (evt) {
  //
});
// tell browser to activate to this js file (once its done installing)

//remove old cache

//

//
// if request fails, serve static files from the cache -(allows page to be accessible offline)
