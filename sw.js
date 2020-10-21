self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('').then(function(cache) {
     return cache.addAll([
       'Islamic-Quiz.html',
       'index.html',
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
