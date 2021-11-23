class EntradasDatos {
    constructor() {
        let nombre;
        let contrasenya;
        this.nombre = "admin";
        this.contrasenya = "1234"
    }

    introduceNombre() {
        let valorEntrada = document.formEntrada.txtInicial.value;
        if (this.compruebaNombre(valorEntrada))
            this.nombre = valorEntrada;
        else
            this.nombre = "No valido";

    }
    compruebaNombre(valor) {
        let flag = true;
        if (valor == null || valor == "")
            flag = false;
        return flag;
    }

    verNombre() {
        return this.nombre;
    }
}
function programa() {
    let objt = new EntradasDatos();
    objt.introduceNombre();
    document.writeln(`El nombre es ${objt.verNombre()}<br><br>
    <input type="button" onclick="window.location.href='Ejercicio_03.html'" name="volver atrás" value="volver atrás">`);
}