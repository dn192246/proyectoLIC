$("#btn-registrar").on("click", function () {
    let nombres = $("#nombre").val();
    let apellidos = $("#apellidos").val();
    let correo = $("#email").val();
    let pais = $("#pais").val();
    let genero = $(".check-gen:checked").val();
    const reg = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (nombres == "" || apellidos == "" || correo == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Completa todos los campos!'
        })
    } else {
        if(reg.test(correo)){
            Swal.fire({
                icon: 'success',
                title: 'Realizado',
                text: 'Registrado exitosamente!'
            });
            saveData(nombres, apellidos, correo, pais, genero);
        }else{
            Swal.fire({
                icon: 'Error',
                title: 'Advertencia',
                text: 'Formato de correo incorrecto!'
            });
        }
    }
});

$("#btn-info").on("click", function () {
    
    if(sessionStorage.getItem("nombres")==null||sessionStorage.getItem("nombres")==""){
        Swal.fire('Debes registrarte primero');
        $("#message").prop("hidden",false);
    }else{
        let nombres = sessionStorage.getItem("nombres");
        let apellidos = sessionStorage.getItem("apellidos");
        let pais = sessionStorage.getItem("pais");
        $("<p><h2>Hola,"+nombres+", "+apellidos+"</h2> Bienvenido a nuestro sitio. Gracias a tu registro sabemos que "
        +" eres de el pais de "+pais+"</p>").appendTo($("#mostrar-info"));
        $("#mostrar-info").prop("hidden",false);
    }
});

function saveData(nombres, apellidos, correo, pais, genero) {
    sessionStorage.setItem("nombres", nombres);
    sessionStorage.setItem("apellidos", apellidos);
    sessionStorage.setItem("correo", correo);
    sessionStorage.setItem("pais", pais);
    sessionStorage.setItem("genero", genero);
}