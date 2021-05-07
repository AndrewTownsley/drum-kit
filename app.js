// When the key that is on the button is pressed, the corresponding sound is played.
// When the key is pressed, the button also plays the animation.

// Declare variables...Keys, Audio

// addEventListener for keydown on specific key
window.addEventListener('keydown', keyPress)

function keyPress(e) {
// Detect whick key is pressed
// console.log(e.keyCode);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// Check if there is an audio element for the key that was pressed
// If there is not, then stlp this function from running until another key is pressed.
if(!audio) {return};
audio.play();
// Play the corresponding audio of the pressed key.

// add the class of 'playing' to the key div of the key that is being pressed.
// key.classList.add('playing');

}

