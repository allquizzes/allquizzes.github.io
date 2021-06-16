var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
 if (e.keyCode == '37') {
       // left arrow
     plusSlides(-1)
    }
    else if (e.keyCode == '39') {
       // right arrow
       plusSlides(1)
    }

}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("con");
  if (n < 1) {slideIndex = 1}
  if (n > slides.length) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
slides[slideIndex-1].style.display = "block";
}
var logo = document.createElement("LINK");            
logo.rel = "icon" ;   
logo.href = "https://allquizzes.github.io/allquizzes-logo.jpg";         
document.getElementsByTagName("head")[0].appendChild(logo);
