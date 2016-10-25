$(document).ready(function() {

    console.log("działa!") // sprawdzam czy dziala

    // punkt 2
    function animate() {
        var buttons = $("button");
        console.log(buttons);

        var progressDivs = $("div");
        console.log(progressDivs);

        // punkt 3

        buttons.on("click", function() { // event na klikniecie
            console.log("Do you hear the voices too?"); // jeszcze trochę i bede slyszec

            // punkt 4
            // zapisuje do zmiennych atrybuty data

            var barNumber = $("#bar" + $(this).attr("data-barNumber")); // ustalenie ktory bar/div dotyczy kliknietego przycisku
            console.log(barNumber);                                    // oraz pobranie do zmiennej numeru - barNumber

            var color = $(this).attr("data-color"); // pobranie do zmiennej koloru
            console.log(color);

            var width = $(this).attr("data-width"); // pobranie do zmiennej szerokosci animacji w procentach
            console.log(width);

            // sprawdzam czy wyswietla prawidlowy span (w html wpisalam cyfry do spanow)
            // console.log(barNumber.find("span").text()); // tak tez mozna zamiast children
            var span = barNumber.children();
            console.log(span.text());

            // usuwam klase zeby wyswietlala sie tylko jedna naraz
            span.removeClass();
            // dodaje odpowiednia klase (tak jak w css) i animacje dla progress bar
            $(span.toggleClass(color)).animate({
                width: width
            }, 2000);
        })
    }
    animate();
});
