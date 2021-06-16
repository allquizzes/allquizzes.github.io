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
var logo = document.createElement("BUTTON");            
logo.onclick = "clickkey()" ;
logo.innerHTML = "Click" ;         
document.getElementsByTagName("body")[0].appendChild(logo);  
function clickkey() {
var keyboardEvent = document.createEvent('KeyboardEvent');
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';

keyboardEvent[initMethod](
  'keydown', // event type: keydown, keyup, keypress
  true, // bubbles
  true, // cancelable
  window, // view: should be window
  false, // ctrlKey
  false, // altKey
  false, // shiftKey
  false, // metaKey
  39, // keyCode: unsigned long - the virtual key code, else 0
  0, // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
);
document.dispatchEvent(keyboardEvent);
}
