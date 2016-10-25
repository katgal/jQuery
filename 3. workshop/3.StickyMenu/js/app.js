$(document).ready(function() {

    // punkt 2

    console.log("dziala!")

    var nav = $("nav");
    console.log(nav);

    var menu = nav.find(".menu");
    console.log(menu);

    var topPosition = menu.offset().top; //pozycja top elementu o klasie "menu"; odleglosc od gornej belki
    // var topPosition = menu.position().top // moze byc tez position() zamiast offset()
    console.log(topPosition);

    // punkt 3,4

    $(window).on("scroll ", function() {

        console.log("skroluje");

        var endZone = $(document).scrollTop(); // odleglosc o ktora zostal przewieniety caly element; odleglosc scrolla na dokumencie
        console.log(endZone); // musi byc w srodku eventu,
                              //  jesli nie to bedzie mierzyl odleglosc nie uwzgledniajac scrolowania, czyli wyswietli 0

        if (endZone > topPosition) { // jesli odleglosc scrola na dokumencie jest wieksza niz pozycja .menu to...
            menu.addClass('sticky'); // dodaj klase "sticky"
        } else {
            menu.removeClass('sticky'); // jesli nie to usun klase "sticky"
        }
    })

    // punk 5 - probowalam zrobic na jednym elemencie $(window) dwa eventy, ale nie dzialalo to dobrze

    $(window).on("resize", function() { // event zmiany szerokosci okna

        console.log("I'm resizing! I'm Groot!") // sprawdzam czy dziala

    // punkt 6 sprawdzanie dystansu dla .menu podczas zmiany wielkosci okna

        if (menu.hasClass("sticky")) {
            var topPosition = menu.offset().top; // ponownie mierzę odległość menu od górnej belki

        } else {
            var topPosition = nav.offset().top; // pobieram odległość od górnej belki dla elementu nav, czyli
        }                                       //elementu trzymajacego .menu (lepiej tak dziala niz menu.offset().top)
    })
});
