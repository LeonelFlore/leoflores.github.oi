var usuarioLogin = document.getElementById("txtLoginUser");
var contraseñaLogin = document.getElementById("txtContraUser");
var btnLogin = document.getElementById("form");

btnLogin.addEventListener ('submit', function(event){
    event.preventDefault();
    if (usuarioLogin.value ==='Leonelflores894@gmail.com' && contraseñaLogin.value === 'musica32'){
        alert("Inicio de sesion exitoso");
        window.location.href="index.html";
     }
     else
     {
       alert("Usuario o contraseña incorrecta");
       return false;
     }
    
    });

 