'use strict';
//Seleccionamos del HTML las etiquetas de audio & las teclas

const splash = document.querySelectorAll('audio');
const divs = document.querySelectorAll('.drum-kit div');

window.addEventListener('keydown', (element) => {
  //Codigo del teclado
  let codes = element.keyCode.toString();

  //Reproducción del  código  si la tecla es igual al audio
  splash.forEach((noise) => {
    if (codes === noise.id) {
      noise.play();
      noise.currentTime = 0;
    }
  });

  //Añadir animaciones para los div`s
  divs.forEach((div) => {
    if (codes === div.id) {
      //lo vinculamos a la animación con el CSS
      div.classList.add('animate');
      setTimeout(() => div.classList.remove('animate'), 100);
    }
  });
});
