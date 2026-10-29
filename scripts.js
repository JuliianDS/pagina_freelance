function validar(){
    correo = document.getElementById("floatingInput");

    if(correo.value != ""){
        correo.classList.add("is-valid");
    }else{
         correo.classList.add("is-invalid")
    }


    numero = document.getElementById("phone");

    if(numero.value != ""){
        numero.classList.add("is-valid");
    }else{
         numero.classList.add("is-invalid")
    }


    nombre = document.getElementById("name");

    if(nombre.value != ""){
        nombre.classList.add("is-valid");
    }else{
         nombre.classList.add("is-invalid")
    }
}
