const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

const precio = 200;
const descuentoEstudiante = 0.2;
const descuentoJunior = 0.85;
const descuentoTrainee = 0.5;


function borrarTodo(){
  document.getElementById("cantidad").value = 0;
  document.getElementById("totalPagar").value = "Total a pagar:$0";
  //document.getElementById("nombre").value= "Nombre";
  //document.getElementById("apellido").value = "Apellido";
  //document.getElementById("correo").value= "correo";
  return;
}

function calculaResumen(){
      let cantidad=parseInt(document.getElementById("cantidad").value);   
      let categoria = parseInt(document.getElementById("categoria").value);

      
      // verificar si lleno todos los campos
     if (categoria != 1 && categoria != 2 && categoria != 3 && categoria !=4){
        
          alert("Por favor, seleccioná una categoría.");
          return;
      }


      let nombre = document.getElementById("nombre");
      let apellido = document.getElementById("apellido");
      let correo = document.getElementById("correo");

      

      if ( nombre.value == ""){
        alert("Por favor, escribí tu nombre");
        nombre.focus();
        return;
      }if ( apellido.value == ""){
        alert("Por favor, escribí tu apellido");
        apellido.focus();
        return;
      }
      if ( correo.value == ""){
        alert("Por favor, escribí tu correo");
        correo.focus();
        return;
      }

      let valor = 0;
      switch (categoria){
              case 1:
                  valor = precio * descuentoEstudiante;
                  break;
              case 2:
                   valor = precio * descuentoTrainee;
                   break;
              case 3:
                   valor = precio * descuentoJunior;
                   break;
              case 4:
                    valor = precio ;
                    break;
              default:
                   break;
      }
      let totalPagar = cantidad * valor;
  
     document.getElementById("totalPagar").innerText = "Total a pagar: $" + totalPagar;
      return;
}


botonBorrar.addEventListener('click', borrarTodo);
botonResumen.addEventListener('click', calculaResumen);
