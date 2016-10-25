$(document).ready(function() {

    console.log("Do you hear the voices too?") // sprawdzam czy dziala

    function slider() {

        // punk 2 zapisuje elementy do zmiennych

        var buttonNext = $("#nextPicture");
        console.log(buttonNext);

        var buttonPrev = $("#prevPicture");
        console.log(buttonPrev);

        var liElements = $("ul").find("li");
        console.log(liElements);

        var pictureIndex = 0; // zmienna przechowujaca aktualny index obrazka (na poczatku bedzie to 0)

        var imgWidth = 400; // szerokosc jednego obrazka
        console.log(imgWidth);

        //punkt 3 - ustawianie szerokosci kontenera ul (wszystkie obok siebie)
        var ulWidth = liElements.length * imgWidth + "px"; // slider czyli 6 obrazkow obok siebie,
        console.log(ulWidth); // 2400px                    // stad mnozenie by dotrzec na konkretna pozycje zdjecia

        var ulContainer = $("ul");
        ulContainer.width(ulWidth); // 2400px

        // punk 4

        buttonNext.on("click", function() {

            console.log("Arghh ... the Chaos Gods speaks clearly now...");
            // punkt 5
            if (liElements.length - 1 > pictureIndex) { // index nie moze byc wiekszy niz ostatni element (zeby nam zdjecia nie uciekaly z kadru)
                var newPosition = imgWidth * (pictureIndex + 1); // zmienna ze zmiana obrazka o 1, czyli szerokosc obrazka razy index
                ulContainer.animate({
                    left: -newPosition // animacja obrazka w prawo; musi byc na minusie!!
                }, 500);
                pictureIndex = pictureIndex + 1; // po kazdym kliknieciu zmienia sie index obrazka o +1
                                                 //(ustawiamy index dla aktualnego wyswietlanego zdjecia)
                                                 // dzieki temu mozemy przejsc do nastepych obrazkow
            }
        });

        // punkt 6
        buttonPrev.on("click", function() {

            console.log("Enemies! We need enemies...");
            // punkt 5
            if (pictureIndex == 0) { // jesli jestesmy na pierwszym zdjeciu to ..
                ulContainer.css("left", 0); // nie przesuwaj slajdu, zostan na indeksie 0

            } else {
                newPosition = imgWidth * (pictureIndex - 1); // cofnij o jeden indeks
                ulContainer.animate({
                    left: -newPosition // animacja obrazka w lewo
                }, 500);
                pictureIndex = pictureIndex - 1; // po kazdym kliknieciu zmiana indeksu o -1
            }
        })
    }
    slider();

});
// **********************************************************************************************************
// punkt 7 - wersja z funkcją
/*
$(document).ready(function() {

    console.log("Do you hear the voices too?") // sprawdzam czy dziala

    function slider() {

        // punk 2 zapisuje elementy do zmiennych

        var buttonNext = $("#nextPicture");
        console.log(buttonNext);

        var buttonPrev = $("#prevPicture");
        console.log(buttonPrev);

        var liElements = $("ul").find("li");
        console.log(liElements);

        var pictureIndex = 0; // zmienna przechowujaca aktualny index obrazka (na poczatku bedzie to 0)

        var imgWidth = 400; // szerokosc jednego obrazka
        console.log(imgWidth);

        //punkt 3 - ustawianie szerokosci kontenera ul (wszystkie obok siebie)
        var ulWidth = liElements.length * imgWidth + "px"; // slider czyli 6 obrazkow obok siebie,
        console.log(ulWidth); // 2400px                    // stad mnozenie by dotrzec na konkretna pozycje zdjecia

        var ulContainer = $("ul");
        ulContainer.width(ulWidth); // 2400px

        function sliderOnButton(button) { // ustawiam funkcje ktora ustala, ktory button zostal klikniety

            if (button === "nextPicture") { //jezeli zostal klikniety button next

                if (liElements.length - 1 > pictureIndex) { // index nie moze byc wiekszy niz ostatni element (zeby nam zdjecia nie uciekaly z kadru)
                    var newPosition = imgWidth * (pictureIndex + 1); // zmienna ze zmiana obrazka o 1, czyli szerokosc obrazka razy index
                    ulContainer.animate({
                        left: -newPosition // animacja obrazka w prawo; musi byc na minusie!!
                    }, 500);
                    pictureIndex = pictureIndex + 1; // po kazdym kliknieciu zmienia sie index obrazka o +1
                    //(ustawiamy index dla aktualnego wyswietlanego zdjecia)
                    // dzieki temu mozemy przejsc do nastepych obrazkow
                }

            } else if (button === "prevPicture") { // jezeli zostal klikniety button prev

                if (pictureIndex == 0) { // jesli jestesmy na pierwszym zdjeciu to ..
                    ulContainer.animate({ // nie przesuwaj slajdu, zostan na indeksie 0
                        left: 0
                    }, 500);

                } else {
                    newPosition = imgWidth * (pictureIndex - 1); // cofnij o jeden indeks
                    ulContainer.animate({
                        left: -newPosition // animacja obrazka w lewo
                    }, 500);
                    pictureIndex = pictureIndex - 1; // po kazdym kliknieciu zmiana indeksu o -1
                }
            }
        }

        buttonNext.on("click", function() {
            console.log("Next button ... the Chaos Gods speaks clearly now...");

            var buttonId = $(this).attr("id"); // pobieram attrybut id by zidentyfikowac co zostalo klikniete
            console.log(buttonId);
            sliderOnButton(buttonId); // przekazuje dane do funkcji sliderOnButton
        });

        buttonPrev.on("click", function() {
            console.log("Prev button ... the Chaos Gods speaks clearly now...");

            var buttonId = $(this).attr("id");// pobieram attrybut id by zidentyfikowac co zostalo klikniete
            console.log(buttonId);
            sliderOnButton(buttonId); // przekazuje dane do funkcji sliderOnButton
        });
    }
    slider();

});
*/
// *****************************************************************************************************************

// z powrotem do pozycji wyjsciowych: next na ostatim powoduje powrot do pierwszego zdjecia;
// prev na pierwszyk powoduje przejscie do ostatniego zdjecia
// ale nieładnie to wygląda
/*
            buttonNext.on("click", function() {

                console.log("Arghh ... the Chaos Gods speaks clearly now...");
                // punkt 5
                if (liElements.length - 1 > pictureIndex) { // index nie moze byc wiekszy niz ostatni element (zeby nam zdjecia nie uciekaly z kadru)
                    var newPosition = imgWidth * (pictureIndex + 1); // zmienna ze zmiana obrazka o 1, czyli szerokosc obrazka razy index
                    ulContainer.animate({
                        left: -newPosition // animacja obrazka w prawo; musi byc na minusie!!
                    }, 500);
                    pictureIndex = pictureIndex + 1; // po kazdym kliknieciu zmienia sie index obrazka o +1
                                                     //(ustawiamy index dla aktualnego wyswietlanego zdjecia)
                                                     // dzieki temu mozemy przejsc do nastepych obrazkow
                 } else {
                     ulContainer.animate({ // jesli index jest wiekszy to cofamy do początku/pozycji wyjsciowej ...
                         left: 0
                     }, 500);
                     pictureIndex = 0; // ...i zerujemy index
                }

            });

            buttonPrev.on("click", function() {

                console.log("Enemies! We need enemies...");
                // punkt 5

             if (pictureIndex == 0) { // jezeli jestesmy na pierwszym zdjeciu to po kliknieciu...
                 pictureIndex= liElements.length // ilosc wszystkich li... ale pamietac ze chodzi o indeksy!! czyli -1 tak jak w nastepnej linii
                 newPosition = imgWidth * (pictureIndex - 1); // cofnij na zdjecie ostatnie; (6-1)*400=2000; musi byc na minusie dlatego left: -newPosition!
                 ulContainer.animate({                        // czyli szerokosc, na ktorej znajduje sie ostatnie zdjecie;
                      left:  -newPosition // animacja obrazka w lewo; musi byc na minusie!!
                 }, 500);
                 pictureIndex = pictureIndex - 1;
            } else {
                newPosition = imgWidth * (pictureIndex - 1); // cofnij o jeden indeks
                 ulContainer.animate({
                     left: -newPosition // animacja obrazka w lewo
                 }, 500);
                 pictureIndex = pictureIndex - 1; // po kazdym kliknieciu zmiana indeksu o -1
            /}
          });
*/
