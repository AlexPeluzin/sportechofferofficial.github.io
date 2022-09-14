alert("Welcome To Sportech");

var caja_login=document.querySelector(".caja_tra_login");  //se agregan las clases del codigo html de las cajas//
var caja_registro=document.querySelector(".caja_tra_registro");

var contenedores_de_ambos=document.querySelector(".contenedor_login_y_register");

var formulario_login=document.querySelector(".login");    //en login,register,cont... se agregan las clases del codigo html//
var formulario_register=document.querySelector(".register");


//funciones de los botones-configurar//
document.getElementById("iniciar sesion").addEventListener("click", iniciarsesion);
document.getElementById("registrarse").addEventListener("click", registrarse);

// se trabaja los estilos css aca del formulario register y login/ en funcion//
function iniciarsesion(){ 

    formulario_register.style.display="none";
    formulario_login.style.display="block";
    contenedores_de_ambos.style.left="90px";   //se coloca porq el formulario se pasa de lado a lado al dar click//  
    caja_registro.style.opacity="1";    //se coloca para el escoder y aparecer//
    caja_login.style.opacity="0";      //se coloca para el escoder y aparecer//
}

function registrarse(){ 
    formulario_register.style.display="block";
    formulario_login.style.display="none";
    contenedores_de_ambos.style.left="410px";   //se coloca porq el formulario se pasa de lado a lado al dar click//  
    caja_registro.style.opacity="0";    //se coloca para el escoder y aparecer//
    caja_login.style.opacity="1";      //se coloca para el escoder y aparecer//
}
