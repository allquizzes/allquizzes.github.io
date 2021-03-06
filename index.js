if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
 e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});

var fnum ,snum, sign , answer ;
function generate() {
  var operation = ["*" , "+" , "-" ]
  var opnum = ranum(0 , 2) ;
  if(operation[opnum] === "*") {
     fnum = ranum(1 , 20) ;
    snum= ranum(1 , 20) ;
    sign = "×" ;
  answer=  fnum * snum ;
} else if (operation[opnum] === "+") {
  fnum = ranum(0, 1000) ;
  snum = ranum(0, 1000) ;
  sign = "+" ;
  answer= fnum + snum ;
} else {
  fnum = ranum(0, 1000) ;
  snum = ranum(0, 1000) ;
  sign = "-" ;
  while(fnum < snum) {
    fnum= ranum(0, 1000)
    snum= ranum(0 , 1000)
  }
 answer = fnum - snum ;
}
  document.getElementById("first"). innerHTML = fnum ;
  document.getElementById("second"). innerHTML = snum ;
    document.getElementById("sign"). innerHTML = sign ;
}
function check() {
  var input = document.getElementById("in").value ;
  var respass = " ✓ Correct , " + fnum + " " + sign  + " " + snum + " = " + answer ;
 var resfail =  "❌ Wrong , " + fnum + " " + sign  + " " + snum + " = " + answer ;
   if(input == answer) {
  document.getElementById("res").innerHTML  = respass ;
     document.getElementById("res").style.color= "green" ;
  } else {
document.getElementById("res").innerHTML = resfail ; 
    document.getElementById("res").style.color = "red" ;
  }
  
  generate()
}
function ranum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
