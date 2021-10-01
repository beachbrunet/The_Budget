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
  evt.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Your files were pre-cached successfully!");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  // Service worker will skip waiting phase and be immediately activated
  self.skipWaiting();
});

// activate service worker --added code from exmaple
self.addEventListener("install", function (evt) {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// tell browser to activate to this js file (once its done installing)

//remove old cache

//

//
// if request fails, serve static files from the cache -(allows page to be accessible offline)
