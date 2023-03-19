for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "l":
        crash = new Audio("sounds/crash.mp3");
        crash.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case "w":
        kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case "a":
        tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case "s":
        tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case "d":
        tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case "j":
        tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case "k":
        snare = new Audio("sounds/snare.mp3");
        snare.play();
        buttonAnimation(buttonInnerHTML);
        break;
      default:
        console.log("Choice not found");
    }
  });
}
document.addEventListener("keydown", function(event) {
  var key = event.key;
  switch (key) {
    case "l":
      crash = new Audio("sounds/crash.mp3");
      crash.play();
      buttonAnimation(event.key);
      break;
    case "w":
      kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      buttonAnimation(event.key);
      break;
    case "a":
      tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      buttonAnimation(event.key);
      break;
    case "s":
      tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      buttonAnimation(event.key);
      break;
    case "d":
      tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      buttonAnimation(event.key);
      break;
    case "j":
      tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      buttonAnimation(event.key);
      break;
    case "k":
      snare = new Audio("sounds/snare.mp3");
      snare.play();
      buttonAnimation(event.key);
      break;
    default:
      console.log("wrong key pressed=" + key);
  }
})

function buttonAnimation(currentKey) {
  var selector = document.querySelector("." + currentKey);
  selector.classList.add("pressed");
  setTimeout(function() {
    selector.classList.remove("pressed");
  }, 100);

}
