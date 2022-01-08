$( document ).ready(function() {
    // Añadir overflow hidden al body cuando se abre el menu y eliminarlo cuando se cierra
    var body = $("body");
    var nav_xl = $("#navigation-xl");
    var nav_sm = $("#navigation-sm");
    var menu_sm = $("#menu_sm");
    var close_nav = $("#close-nav");
    var open_nav = $("#open-nav");

    // Cerrar menú
    close_nav.click(function() {
        menu_sm.removeClass("translate-x-0");
        menu_sm.addClass("translate-x-full");
        body.removeClass("overflow-hidden");
    });

    // Abrir menú
    open_nav.click(function() {
        menu_sm.removeClass("translate-x-full");
        menu_sm.addClass("translate-x-0");
        body.addClass("overflow-hidden");
    });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll >= 20) {
            console.log(scroll);
            nav_xl.addClass("shadow-lg");
            nav_sm.addClass("shadow-lg");
        } else {
            nav_xl.removeClass("shadow-lg");
            nav_sm.removeClass("shadow-lg");
        }
    });
});