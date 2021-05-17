document.querySelector('.cache').addEventListener('click', function (event) {
  event.preventDefault();
  caches.open('mysite-article-' + document.location).then(function (cache) {
      var depend = ["https://allquizzes.github.io/tech/html.html" , "https://allquizzes.github.io/style.css"] ;
        cache.addAll(depend);
});
