var toggle = 1;
$(document).ready(function () {

    $(".encabezado").click(function () {
        if (toggle) {
            $(".slide-menu").css("transform", "translate3d(0, 0, 0)");
            $(".contenedor").css("transform", "translate3d(250px, 0, 0)");
            toggle = 0;
        } else {
            $(".slide-menu").css("transform", "translate3d(-250px, 0 ,0)");
            $(".contenedor").css("transform", "translate3d(0, 0, 0)");
            toggle = 1;
        }
    });
});