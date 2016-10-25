$(document).ready(function() {

    // zad. 1

    function ex1() {

        var shopping = $(".shopping");
        var buttons = shopping.find("button");
        var status = false; // domyslnie nie ma klasy

        buttons.on("click", function() {

            if (status == false) {
                $(this).addClass("added").parent().parent().addClass("cart-updated"); // zmiana tła buttona i dodanie klasy z borderem zielonym
                status = true; // zmiana statusu

            } else {
                $(this).removeClass("added").parent().parent().removeClass("cart-updated"); // reset ustawien koszyka
                status = false; // zmiana statusu
            }
        })
    }
    ex1();

    // zad. 2

    function ex2() {

        var films = $(".films");
        var expand = films.find(".expand");

        expand.on("click", function(event) { // rozwijanie opisu

            event.preventDefault(); // zatrzymanie funkcji domyślnej linka - brak przejscia na nowa strone
            $(this).parent().siblings().slideDown("slow");
        })

        var close = films.find(".container");

        close.on("click", function() { // zwijanie opisu
            event.preventDefault();
            // $(this).slideUp("slow"); // zwijaja sie pojedynczo
            close.slideUp("slow"); // zwijaja sie wszystkie naraz
        })
    }
    ex2();

    //zad. 3

    function ex3() {

        var links = $("a");

        links.each(function() {
            $(this).attr("href", "www.coderslab.pl"); // przypisanie atrybutu href każdemu a/linkowi
        })
    }
    ex3();

});
