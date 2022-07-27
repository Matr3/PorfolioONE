function animationHome() {
  document.querySelector(".presentacion").style.animation = "fadeOuputTop ease 2s backwards";
  document.querySelector(".presentacion1").style.animation = "fadeOuputTop ease 2s backwards";
  document.querySelector(".presentacion2").style.animation = "fadeOuputTop ease 2s backwards";
  document.querySelector(".comentario").style.animation = "fadeOuputRight ease 2s backwards";
  document.querySelector(".contenidoPrincipal_link__1").style.animation = "animate 3s linear infinite, rotate ease 2s backwards";
  document.querySelector(".contenidoPrincipal_link__2").style.animation = "animate 3s linear infinite, rotate ease 2s backwards";
  document.querySelector(".contenidoPrincipal_link__3").style.animation = "animate 3s linear infinite, rotate ease 2s backwards";
  document.querySelector(".imgEmpresarial").style.animation = "-imgRotate 5s backwards";
}

function animationSobreMi() {
  document.querySelector(".sobreMi").style.animation = "fadeOuputRight ease 2s backwards";
}

function animationSkills() {
  document.querySelector(".skills").style.animation = "fadeOuputRight ease 2s backwards";
}

function animationHobbies() {
  document.querySelector(".hobbies").style.animation = "fadeOuputRight ease 2s backwards";
}

function animationFormacion() {
  document.querySelector(".formacion").style.animation = "fadeOuputRight ease 2s backwards";
}

function animationProyectos() {
  document.querySelector(".proyectos").style.animation = "fadeOuputRight ease 2s backwards";
}

function animationContactos() {
  document.querySelector(".contacto").style.animation = "fadeOuputRight ease 2s backwards";
}

function aimationMenuFadeIn() {
  document.querySelector(".headerPrincipal").style.animation = "fadeIn ease 3s backwards";
}

function aimationMenuFadeOuput() {
  document.querySelector(".headerPrincipal").style.animation = "fadeOuput ease 3s backwards";
}

function activarBoton(){
  document.getElementById('btSobreMi').disabled=false;
  document.getElementById('btSkills').disabled=false;
  document.getElementById('btHobbies').disabled=false;
  document.getElementById('btFormacion').disabled=false;
  document.getElementById('btProyectos').disabled=false;
  document.getElementById('btContacto').disabled=false;
}

var btSobreMi = document.querySelector("#btSobreMi");
btSobreMi.addEventListener("click", function () {
  activarBoton();
  document.getElementById('btSobreMi').disabled=true;
  
  if (screen.width > 768) {
    aimationMenuFadeOuput();
    animationHome();
    document.querySelector(".sobreMi").style.animation = "fadeInLeft ease 2s backwards";
    animationSkills();
    animationHobbies();
    animationFormacion();
    animationProyectos();
    animationContactos();
    var timeLeft = 9;
    var timerId = setInterval(countdown, 1000);

    function eliminaDiv() {
      document.querySelector(".principal").style.display = "none";
      document.querySelector(".sobreMi").style.display = "none";
      document.querySelector(".skills").style.display = "none";
      document.querySelector(".hobbies").style.display = "none";
      document.querySelector(".social").style.display = "none";
      document.querySelector(".formacion").style.display = "none";
      document.querySelector(".proyectos").style.display = "none";
      document.querySelector(".contacto").style.display = "none";
    }

    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);

      } else {
        if (timeLeft == 9) {
          eliminaDiv();
        }
        if (timeLeft == 8) {
          aimationMenuFadeIn();
          document.querySelector(".sobreMi").style.display = "flex";
          document.querySelector(".social").style.display = "flex";
          document.querySelector(".contenidoPrincipal_link__1").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__2").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__3").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
        }
        timeLeft--;
      }
    }
  }
});


var btSkills = document.querySelector("#btSkills");
btSkills.addEventListener("click", function () {
  activarBoton();
  document.getElementById('btSkills').disabled=true;
  if (screen.width > 768) {
    aimationMenuFadeOuput();
    animationHome();
    document.querySelector(".skills").style.animation = "fadeInLeft ease 2s backwards";
    animationSobreMi();
    animationHobbies();
    animationFormacion();
    animationProyectos();
    animationContactos();

    function eliminaDiv() {
      document.querySelector(".principal").style.display = "none";
      document.querySelector(".sobreMi").style.display = "none";
      document.querySelector(".skills").style.display = "none";
      document.querySelector(".hobbies").style.display = "none";
      document.querySelector(".social").style.display = "none";
      document.querySelector(".formacion").style.display = "none";
      document.querySelector(".proyectos").style.display = "none";
      document.querySelector(".contacto").style.display = "none";
    }

    var timeLeft = 9;
    var timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
      } else {
        if (timeLeft == 9) {
          eliminaDiv();
        }
        if (timeLeft == 8) {
          aimationMenuFadeIn();
          document.querySelector(".skills").style.display = "flex";
          document.querySelector(".social").style.display = "flex";
          document.querySelector(".contenidoPrincipal_link__1").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__2").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__3").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
        }
        timeLeft--;
      }
    }
  }
});

var btHobbies = document.querySelector("#btHobbies");
btHobbies.addEventListener("click", function () {
  activarBoton();
  document.getElementById('btHobbies').disabled=true;
  if (screen.width > 768) {
    aimationMenuFadeOuput();
    animationHome();
    animationSobreMi();
    animationSkills();
    animationFormacion();
    animationProyectos();
    animationContactos();
    document.querySelector(".hobbies").style.animation = "fadeInLeft ease 2s backwards";
    
    function eliminaDiv() {
      document.querySelector(".principal").style.display = "none";
      document.querySelector(".sobreMi").style.display = "none";
      document.querySelector(".hobbies").style.display = "none";
      document.querySelector(".skills").style.display = "none";
      document.querySelector(".social").style.display = "none";
      document.querySelector(".formacion").style.display = "none";
      document.querySelector(".proyectos").style.display = "none";
      document.querySelector(".contacto").style.display = "none";
    }

    var timeLeft = 9;
    var timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);

      } else {
        if (timeLeft == 9) {
          eliminaDiv();
        }
        if (timeLeft == 8) {
          aimationMenuFadeIn();
          document.querySelector(".hobbies").style.display = "flex";
          document.querySelector(".social").style.display = "flex";
          document.querySelector(".contenidoPrincipal_link__1").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__2").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__3").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
        }

        timeLeft--;
      }
    }
  }
});


var btFormacion = document.querySelector("#btFormacion");
btFormacion.addEventListener("click", function () {
  activarBoton();
  document.getElementById('btFormacion').disabled=true;
  if (screen.width > 768) {
    aimationMenuFadeOuput();
    animationHome();
    animationSobreMi();
    animationSkills();
    animationHobbies();
    animationProyectos();
    animationContactos();
    document.querySelector(".formacion").style.animation = "fadeInLeft ease 2s backwards";
    
    function eliminaDiv() {
      document.querySelector(".principal").style.display = "none";
      document.querySelector(".sobreMi").style.display = "none";
      document.querySelector(".skills").style.display = "none";
      document.querySelector(".hobbies").style.display = "none";
      document.querySelector(".social").style.display = "none";
      document.querySelector(".formacion").style.display = "none";
      document.querySelector(".proyectos").style.display = "none";
      document.querySelector(".contacto").style.display = "none";
    }
    
    var timeLeft = 9;
    var timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);

      } else {
        if (timeLeft == 9) {
          eliminaDiv();
        }
        if (timeLeft == 8) {
          aimationMenuFadeIn();
          document.querySelector(".formacion").style.display = "flex";
          document.querySelector(".social").style.display = "flex";
          document.querySelector(".contenidoPrincipal_link__1").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__2").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__3").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
        }

        timeLeft--;
      }
    }
  }
});


var btProyectos = document.querySelector("#btProyectos");
btProyectos.addEventListener("click", function () {
  activarBoton();
  document.getElementById('btProyectos').disabled=true;
  if (screen.width > 768) {
    aimationMenuFadeOuput();
    animationHome();
    animationSobreMi();
    animationSkills();
    animationHobbies();
    animationFormacion();
    animationContactos();
    document.querySelector(".proyectos").style.animation = "fadeInLeft ease 2s backwards";
    
    function eliminaDiv() {
      document.querySelector(".principal").style.display = "none";
      document.querySelector(".sobreMi").style.display = "none";
      document.querySelector(".skills").style.display = "none";
      document.querySelector(".hobbies").style.display = "none";
      document.querySelector(".social").style.display = "none";
      document.querySelector(".formacion").style.display = "none";
      document.querySelector(".proyectos").style.display = "none";
      document.querySelector(".contacto").style.display = "none";
    }
    
    var timeLeft = 9;
    var timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);

      } else {
        if (timeLeft == 9) {
          eliminaDiv();
        }
        if (timeLeft == 8) {
          aimationMenuFadeIn();
          document.querySelector(".proyectos").style.display = "flex";
          document.querySelector(".social").style.display = "flex";
          document.querySelector(".contenidoPrincipal_link__1").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__2").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__3").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
        }

        timeLeft--;
      }
    }
  }
});


var btContacto = document.querySelector("#btContacto");
btContacto.addEventListener("click", function () {
  activarBoton();
  document.getElementById('btContacto').disabled=true;
  if (screen.width > 768) {
    aimationMenuFadeOuput();
    animationHome();
    animationSobreMi();
    animationSkills();
    animationHobbies();
    animationFormacion();
    animationProyectos();
    document.querySelector(".contacto").style.animation = "fadeInLeft ease 2s backwards";
    
    function eliminaDiv() {
      document.querySelector(".principal").style.display = "none";
      document.querySelector(".sobreMi").style.display = "none";
      document.querySelector(".hobbies").style.display = "none";
      document.querySelector(".skills").style.display = "none";
      document.querySelector(".social").style.display = "none";
      document.querySelector(".formacion").style.display = "none";
      document.querySelector(".proyectos").style.display = "none";
      document.querySelector(".contacto").style.display = "none";
    }
    
    var timeLeft = 9;
    var timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);

      } else {
        if (timeLeft == 9) {
          eliminaDiv();
        }
        if (timeLeft == 8) {
          aimationMenuFadeIn();
          document.querySelector(".contacto").style.display = "flex";
          document.querySelector(".social").style.display = "flex";
          document.querySelector(".contenidoPrincipal_link__1").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__2").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
          document.querySelector(".contenidoPrincipal_link__3").style.animation = "animate 3s linear infinite, -rotate ease 1s backwards";
        }

        timeLeft--;
      }
    }
  }
});

var btcv = document.querySelector("#cv");
btcv.addEventListener("click", function () {
  window.open('./img/Profile.pdf', '_blank');
});