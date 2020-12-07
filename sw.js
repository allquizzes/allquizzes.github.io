
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       'IMG-20201127-WA0043.jpg' ,
       'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js' ,
       'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js' ,
       'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' ,
       'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
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
