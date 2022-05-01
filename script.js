'use strict';
//Seleccionamos del HTML las etiquetas de  las teclas

//const splash = document.querySelectorAll('audio');
const divs = document.querySelectorAll('.key').length;

for (let i = 0; i < divs; i++) {
  document.querySelectorAll('.key')[i].addEventListener('click', function () {
    const buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

//Vinculamos el botón con el sonido
document.addEventListener('keypress', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Creamos un Switch para vincular la tecla con el sonido correspondiente
function makeSound(key) {
  switch (key) {
    case 'e':
      const crash = new Audio('audio/crash.wav');
      crash.play();
      break;

    case 'w':
      const hithatClose = new Audio('audio/hihat-close.wav');
      hithatClose.play();
      break;

    case 'a':
      const hithatOpen = new Audio('audio/hihat-open.wav');
      hithatOpen.play();
      break;

    case 's':
      const kick = new Audio('audio/kick.wav');
      kick.play();
      break;

    case 'd':
      const snare = new Audio('audio/snare.wav');
      snare.play();
      break;

    case 'j':
      const tomHigh = new Audio('audio/tom-high.wav');
      tomHigh.play();
      break;

    case 'k':
      const tomLow = new Audio('audio/tom-low.wav');
      tomLow.play();
      break;

    case 'l':
      const tomMid = new Audio('audio/tom-mid.wav');
      tomMid.play();
      break;

    case 'i':
      const ride = new Audio('audio/ride.wav');
      ride.play();
      break;
  }
}

//Añadir animaciones para las teclas

function buttonAnimation(currentKey) {
  const aniButton = document.querySelector('.' + currentKey);

  aniButton.classList.add('animate');

  //tiempo de la animacción
  setTimeout(function () {
    aniButton.classList.remove('animate');
  }, 100);
}
