
var urlsToCache = [

  '/',

  '/styles.css',

  '/home.js'

];

​

self.addEventListener('install', (event) => {

  event.waitUntil(

    caches.open('my-cache')

      .then((cache) => {

        return cache.addAll(urlsToCache);

      })

  );

});
self.addEventListener('fetch', (event) => {

  event.respondWith(

    caches.match(event.request)

      .then((response) => {

        // The responce is in the cache

        if (response) {

          return response;

        }

​

        // No cache match, we attempt to fetch it from the network

        return fetch(event.request);

      }

    )

  );

});
