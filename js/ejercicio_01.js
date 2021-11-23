function ficha() {
    let alummno = {
        nombre: "Caterina",
        edad: 18
    };
    this.verNombre = function () {
        return alummno.nombre;
    };
    this.verEdad = function () {
        var resultado = alummno.edad;
        return resultado;
    };
}

function programa() {
    let obj = new ficha();
    //let parrafo = document.getElementsByClassName("parrafo");
    document.writeln(`El nombre es ${obj.verNombre()}<br>`);
    document.writeln(`La edad es ${obj.verEdad()}<br>
    <input type="button" onclick="window.location.href='Index.html.html'" name="volver atrás" value="volver atrás">`);
}
