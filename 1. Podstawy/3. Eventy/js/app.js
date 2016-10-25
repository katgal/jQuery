$(document).ready(function() {
    /*
    zad. test. 1
        // The mouseover event is fired when a pointing device is moved onto the element that has the listener attached or onto one of its children.
        $("dt").on("mouseover", function() {
            console.log($(this).text()); // zmieniamy this na obiekt jquerowy, bo this to obiekt js
            // text() pokazuje to co jest napisane miedzy tagami
            // console.log(this); // zwroci razem z tagiem
        })

        //  The mouseenter event is fired when a pointing device (usually a mouse) is moved over the element that has the listener attached.
        // Triggeruje gdy najezdzamy na element, nie dziala na jego dzieci
        $("dt").on("mouseenter", function() {
            console.log($(this).text());
            // np. Wolverine
            // console.log(this);
            // <dt>Wolverine</dt>
        })

        // jesli poruszam myszka po elemencie to w konsola pokazuje nazwe elementu
        $("dt").on("mousemove", function() {
            console.log($(this).text());
        })
      }
    */

    /* function ex1() {
        //zad. 1

            // znajduje elementy
            var heroes = $(".hero-buttons").find("button");
            console.log(heroes);

            var ironMan = $(".ironMan-btn");
            var thor = $(".thor-btn");
            var wolverine = $(".wolverine-btn");

            // console.log(ironMan.text(), thor.text(), wolverine.text());

            ironMan.on("click", function() {
                console.log("kliknięto mnie!");
            })


            thor.one("click", function() {
                console.log("kliknięto mnie, ale już się drugi raz nie dam kliknąć!");
            })


            wolverine.on("click", function(event) {
                    heroes.off("click");
                })
              }
              ex1();
            */

    //zad. 2

    function ex2() {

        var superHeroes = $(".superhero-description");
        console.log(superHeroes);

        superHeroes.find("dd").hide("slow");

        superHeroes.find("dt").on("click", function() {

            // var $this = $(this); // $this zwykla zmienna nie jquerowa; tutaj this należy zamienić na obiekt jquerowy
            // console.log($(this).next().text());
            $(this).next().toggle("slow"); // next() odnosi sie do brata; pojawiaja sie pojedynczo
            // superHeroes.find("dd").toggle("slow"); // pojawiaja sie/zwijaja sie wszystkie naraz
        })
    }
    ex2();

    //zad.3
    function ex3() {

        var button = $(".Login").find(".show-hide-btn");
        // console.log(button);
        var input = $(".Login").find(".user-pass");
        // console.log(input);

        button.on("click", function(event) {
            event.preventDefault(); // trzeba dodac bo mamy button i sie strona po kazdym kliknieciu przeladowuje
            console.log("dzialam!");

            var type = input.attr("type");
            if (type == "password") {
                input.attr("type", "text");
                console.log("zmieniam na text") // sprawdzam czy funkcja dziala
            } else {
                console.log("zmieniam na password ***") // sprawdzam czy funkcja dziala
                input.attr("type", "password");
            }
        })
    }
    ex3();

    // zad. 4
    function ex4() {

        var elA = $(".menu").find("a");

        elA.on("mouseover", function(event) {
            console.log("Hura");
        })
    }
    ex4();

    // zad. 5

    function ex5() {

        var login = $(".Login");
        var input = login.find("input");

        input.on("focus", function() {
            $(this).css("box-shadow", "0 0 10px #BDC3C7") // cien zewnetrzny
            $(this).css("background", "#DADFE1")
        })
        input.on("blur", function() {
            $(this).css("background", "grey");
            $(this).css("box-shadow", "none");
        })
    }
    ex5();
});
