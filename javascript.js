const cric = document.querySelector(".svg-circle1 circle");

length=circ.getTotalLength();

function scrolling(){
  var anim = document.querySelector('.projects');
  var anim = document.querySelector('.projects');
  var down = anim.getBoundingClientRect().top;
  var device = window.innerHeight / 2;

  if (down<device){
    anim.classList.add('see');
  }
}

window.addEventListener('scroll', scrolling);
