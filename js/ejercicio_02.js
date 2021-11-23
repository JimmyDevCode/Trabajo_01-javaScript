let ficha = (function () {

    let alumno;
    this.alumno = "Marga";

    return {

        inicio() {
            this.alumno = "Norat"
        },
        verNombre() {
            return this.alumno;
        },

    }
})(); //fin 'clase'

function programa() {
    ficha.inicio();
    document.writeln(`El nombre es ${ficha.verNombre()} <br><br>
    <input type="button" onclick="window.location.href='Ejercicio_02.html'" name="volver atrás" value="volver atrás">`);

}