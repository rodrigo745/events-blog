$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function(respuesta){
  //Guarda el resultado en variables
  var eventoCero = respuesta.eventos[0];
  var eventoUno = respuesta.eventos[1];
  var eventoDos = respuesta.eventos[4];
  var eventoTres = respuesta.eventos[5];

  //Selecciona los eventos que sean posteriores a la fecha actual del JSON
  var pasados = [eventoCero, eventoUno, eventoDos, eventoTres];

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  resultado = pasados.map(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c;
  });
  resultado.sort();

  pasadoUno = pasados.filter(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c == resultado[0];
  });
  pasadoDos = pasados.filter(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c == resultado[1];
  });
  pasadoTres = pasados.filter(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c == resultado[2];
  });
  pasadoCuatro = pasados.filter(x =>{
    c = parseInt(x.fecha.replace(/-/g, ''));
    return c == resultado[3];
  });

 var cambio = [pasadoUno[0], pasadoDos[0], pasadoTres[0], pasadoCuatro[0]];

  for (var i = 0; i < pasados.length; i++) {

  //Crea un string que contenga el HTML que describe el detalle del evento

  var divs = document.createElement("div");
    divs.setAttribute('class', 'col-12 bg-light mt-3 p-1 radi px-4')

  var nombre = document.createElement("h2");
  nombre.setAttribute('class','text-primary mt-3 mb-0');
  var contenidoNombre = document.createTextNode(cambio[i].nombre);
  nombre.appendChild(contenidoNombre);

  var fecha = document.createElement("p");
  fecha.setAttribute('class', 'text-black-50 mt-0 mb-1 d-inline');
  var contenidoFecha = document.createTextNode(cambio[i].fecha);
  fecha.appendChild(contenidoFecha);

  var lugar = document.createElement("span");
  lugar.setAttribute('class', 'text-black-50 mx-3 ');
  var contenidoLugar = document.createTextNode(cambio[i].lugar);
  lugar.appendChild(contenidoLugar);

  var descripcion = document.createElement("p");
  descripcion.setAttribute('class', 'mb-2');
  var contenidoDescripcion = document.createTextNode(cambio[i].descripcion);
  descripcion.appendChild(contenidoDescripcion);

  var precio = document.createElement("p");
  precio.setAttribute('class', 'mt-0 mb-4 text-primary');
  var contenidoPrecio = document.createTextNode("Costo: " + cambio[i].precio);
  precio.appendChild(contenidoPrecio);
  

  divs.appendChild(nombre);
  divs.appendChild(fecha);
  divs.appendChild(lugar);

  divs.appendChild(descripcion);
  divs.appendChild(precio);
  document.getElementById("pasados").appendChild(divs);
  
  }
 });
});
