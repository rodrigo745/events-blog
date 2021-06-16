// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  // Variables por Id tomadas del formulario
  var nombre = document.getElementById('errornombres');
  var correo = document.getElementById('errorEmail');
  var contrasena = document.getElementById('errorContrasena');
  var confirmacion = document.getElementById('errorConfirmacion');
  var tipos = document.getElementById('errorTipo');
  var acepto = document.getElementById('errorAcepto');
  
  //Expresion regular del correo

  var name = formulario.nombres.value;
  var email = formulario.email.value;
  var password = formulario.contrasena.value;
  var passConf = formulario.confirmacion.value;
  var typeUser = formulario.tipo.value;
  var condition = formulario.acepto;
  var re =  /\S+@\S+\.\S+/;

  if(name == ""){
    nombre.innerHTML = "Este campo es obligatorio";
    correo.innerHTML = "Campo obligatorio";
    contrasena.innerHTML = "Debe tener al menos 7 caracteres";
    confirmacion.innerHTML = "No coincide con la contraseña";
    tipos.innerHTML = "Este campo es obligatorio";
    acepto.innerHTML = "Este campo es obligatorio";
    return false;
  }
  if(!re.test(email)){
    nombre.innerHTML = "Este campo es obligatorio";
    correo.innerHTML = "Campo obligatorio";
    contrasena.innerHTML = "Debe tener al menos 7 caracteres";
    confirmacion.innerHTML = "No coincide con la contraseña";
    tipos.innerHTML = "Este campo es obligatorio";
    acepto.innerHTML = "Este campo es obligatorio";
    return false;
  }
  if(password.trim().length <= 7){
    nombre.innerHTML = "Este campo es obligatorio";
    correo.innerHTML = "Campo obligatorio";
    contrasena.innerHTML = "Debe tener al menos 7 caracteres";
    confirmacion.innerHTML = "No coincide con la contraseña";
    tipos.innerHTML = "Este campo es obligatorio";
    acepto.innerHTML = "Este campo es obligatorio";
    return false;
  }
  if(password != passConf){
    nombre.innerHTML = "Este campo es obligatorio";
    correo.innerHTML = "Campo obligatorio";
    contrasena.innerHTML = "Debe tener al menos 7 caracteres";
    confirmacion.innerHTML = "No coincide con la contraseña";
    tipos.innerHTML = "Este campo es obligatorio";
    acepto.innerHTML = "Este campo es obligatorio";
    return false;
  }
  if(typeUser == ""){
    nombre.innerHTML = "Este campo es obligatorio";
    correo.innerHTML = "Campo obligatorio";
    contrasena.innerHTML = "Debe tener al menos 7 caracteres";
    confirmacion.innerHTML = "No coincide con la contraseña";
    tipos.innerHTML = "Este campo es obligatorio";
    acepto.innerHTML = "Este campo es obligatorio";
    return false;
  }
  if(!condition.checked){
    nombre.innerHTML = "Este campo es obligatorio";
    correo.innerHTML = "Campo obligatorio";
    contrasena.innerHTML = "Debe tener al menos 7 caracteres";
    confirmacion.innerHTML = "No coincide con la contraseña";
    tipos.innerHTML = "Este campo es obligatorio";
    acepto.innerHTML = "Este campo es obligatorio";
    return false;
  }
  alert("Registro exitoso");
}
