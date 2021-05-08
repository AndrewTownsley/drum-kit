
function removeTransition(e) {
  // console.log(e);
  if(e.propertyName !== 'transform') return;// skip it if it is not a transform property.
  console.log(this);
  e.target.classList.remove('playing');
}

function playSound(e) {
  // Detect whick key is pressed
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // Check if there is an audio element for the key that was pressed
  // If there is not, then stlp this function from running until another key is pressed.
  if(!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;// rewind to the start of the sound file.
  // Play the corresponding audio of the pressed key.
    audio.play();
  // setTimeout(function() {
  //   key.classList.remove('playing');}, 300);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// addEventListener for keydown on specific key
window.addEventListener('keydown', playSound);






