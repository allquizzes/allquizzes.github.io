self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('allquizzes').then(function (cache) {
      return cache.addAll([
        '/index.html' ,
       'index.js' ,
       'sw.js'
      ]);
    }),
  );
});
self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    }),
  );
});
