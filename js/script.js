// function playRain(event) {
//   var audio = new Audio("sound/rain.mp3");
//   audio.play();
// }
// document.querySelector("#rain-button").addEventListener("click", playRain);

// function to play a sound when button is clicked

function toggleSound(animal) {
  var audioElem = document.getElementById(animal);
  if (audioElem.paused) audioElem.play();
  else audioElem.pause();
}

// function that sets volume

// function setVolume(animal) {
//   audioElem.volume = document.getElementById("volumeSlider").value / 100;
// }

function setVolume(volume) {
  audioElem.volume = volume;
}

// function that changes opacity of button when clicked

 function toggleButton() {
    var x = document.querySelector(".icon");
    if (x.style.opacity === "0.5") {
    x.style.opacity = "1";
/   } else {
    x.style.opacity = "0.5";
   }
 }
 document.querySelector(".icon").addEventListener("click", toggleButton);

// const icons = document.querySelectorAll(".icon");

// for (let i = 0; i < icons.length; i++) {
//   icons[i].addEventListener("click", function(event) {
//     toggleButton(event.target.id);
//   });
// }

// function toggleButton(icon) {
//   var x = document.querySelector(".icon");
//   if (x.style.opacity === "0.5") {
//     x.style.opacity = "1";
//   } else {
//     x.style.opacity = "0.5";
//   }
// }
