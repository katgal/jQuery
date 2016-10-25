$(document).ready(function() {

    // zad. 1

    function ex1() {

        var box = $(".box");
        var width = box.width();
        var height = box.height();
        console.log(width, height); // konsola wyswietli szerokosc i wysokosc elementu
        // 100px, 100px
        var box2 = $("<div class='box'>box2</div>");
        box.after(box2.width(width).height(height).css("background", "red"));
        // box.after(box2.css("background", "red")); // tez dziala
    }
    ex1();

    // zad. 2

    function ex2() {

        var menu = $(".menu");
        var aElements = menu.find("a");

        aElements.on("click", function(event) {

                event.preventDefault(); // usuniecie domyslnego dzialania linkow (brak przejscia)

                var href = $(this).attr("href"); // pobranie nazwy naglowka z # z linka
                var target = $(href); // href musi byc jquerowe
                console.log(target.position()); // konsola wypisuje pozycje top i left
                console.log(target.offset());

                // scrolluje strone od gory - top, czyli zmienia pozycje top do pobranej pozycji - target,
                // docelowe paragrafy z id pobrane z linkow z #
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 2500); // offset aktualna pozycja wzgledem dokumentu

                // mozna tez tak

                /*$("html, body").animate({
                    scrollTop: target.position().top
                }, slow); */ // position aktualna pozycja wzgledem rodzica

                // return false; // mozna tez zamiast event.preventDefault() dac return false
            })
            // podwojne klikniecie spowoduje powrot na poczatek strony, czyli pozycje top=0
        $("html").on('dblclick', function(event) {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        })
    }
    ex2();
});
