$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function(respuesta){

  //Guarda el resultado en variables
  var eventoUno = respuesta.eventos[0];
  var asdad = respuesta.eventos;
  var eventoDos = respuesta.eventos[1];
  var eventoTres = respuesta.eventos[2];
  var eventoCuatro = respuesta.eventos[3];
  var eventoCinco = respuesta.eventos[4];
  var eventoSeis = respuesta.eventos[5];
  var eventoSiete = respuesta.eventos[6];

  //Clasifica los eventos segun la fecha actual del JSON
  var proximos = [eventoTres, eventoCuatro, eventoSiete];
  var anteriores = [eventoUno, eventoDos, eventoCinco, eventoSeis];

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  resultadoUno = proximos.map(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c;
  });
  resultadoUno.sort();
  //Extrae solo dos eventos
  proximaUno = asdad.filter(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c == resultadoUno[0];
  });
  proximaDos = asdad.filter(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c == resultadoUno[1];
  });

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  resultadoDos = anteriores.map(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c;
  });
  resultadoDos.sort((a, b) => b - a);

  //Extrae solo dos eventos
  anteriorUno = asdad.filter(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c == resultadoDos[0];
  });
  anteriorDos = asdad.filter(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c == resultadoDos[1];
  });


  //Crea un string que contenga el HTML que describe el detalle del evento
  var divProx = `<div class="col-12 col-md-5 bg-light m-auto radi px-4">
                <h2 class="text-primary mt-3 mb-0">${proximaUno[0].nombre}</h2>
                <p class="text-black-50 mt-0 mb-1">${proximaUno[0].fecha}</p>
                <p class="mt-0 mb-4">${proximaUno[0].descripcion}</p>
              </div>
              <div class="col-12 col-md-5 bg-light m-auto radi px-4">
                <h2 class="text-primary mt-3 mb-0">${proximaDos[0].nombre}</h2>
                <p class="text-black-50 mt-0 mb-1">${proximaDos[0].fecha}</p>
                <p class="mt-0 mb-4">${proximaDos[0].descripcion}</p>
              </div>`;

  //Modifica el DOM agregando el html generado
  document.getElementById('proximos').innerHTML = divProx;

  //Crea un string que contenga el HTML que describe el detalle del evento
  var divAnt = `<div class="col-12 col-md-5 bg-light m-auto radi px-4">
                  <h2 class="text-primary mt-3 mb-0">${anteriorUno[0].nombre}</h2>
                  <p class="text-black-50 mt-0 mb-1">${anteriorUno[0].fecha}</p>
                  <p class="mt-0 mb-4">${anteriorUno[0].descripcion}</p>
                </div>
                <div class="col-12 col-md-5 bg-light m-auto radi px-4">
                  <h2 class="text-primary mt-3 mb-0">${anteriorDos[0].nombre}</h2>
                  <p class="text-black-50 mt-0 mb-1">${anteriorDos[0].fecha}</p>
                  <p class="mt-0 mb-4">${anteriorDos[0].descripcion}</p>
                </div>`;

  //Modifica el DOM agregando el html generado
  document.getElementById('pasados').innerHTML = divAnt;

  });
});
