
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       'IMG-20201127-WA0043.jpg' 
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
