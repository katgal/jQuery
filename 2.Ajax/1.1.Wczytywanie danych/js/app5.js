/*1. zrobić listę ul
2. pod nią przycisk "pobierz listę wyników"
3. po kliknięciu przyciski pobiera z API
http://showcase.itdotfocus.com/api_simple.php
4. wyświetla listę ludzi  i ich punkty (np Imię Nazwisko - 5/10),
dodatkowo kolor osoby zależy od punktacji. 1-3 na czerwono, 4-7 na żółto, 8-10 na zielono
*/


$(function() {

    function insertPerson(name, points) {
        // zmiana koloru
        if (points <= 3) {
            var color = "red";
        } else if (points <= 7) {
            var color = "yellow";
        } else {
            var color = "green";
        }
        // stworzenie elementów listy
        var ul = $("ul");
        var newLi = $("<li>" + name + " " + points + "/10" + "</li>");
        newLi.hide();
        // zmiana koloru za pomoca css
        newLi.css("color", color);
        // dodawanie listy
        ul.append(newLi);
        newLi.fadeIn();
    }

    function loadPerson() {
        $("ul").empty() //czyści liste
        $.ajax({
            url: "http://showcase.itdotfocus.com/api_simple.php",
            dataType: "json"
        }).done(function(ans) {

            for (var name in ans) {
                // iteracja po obiekcie - wyświetla sie lista osób

                // iterowanie po obiekcie
                // for (var nazwa in obiekt)
                // nazwa - nazwa
                // obiekt[nazwa] - wartość
                // console.log(ans[name]); // w konsoli wyświetla ilość punktów

                // var name = ans[i].title + " " + ans[i].name + " " + ans[i].surname;

                insertPerson(name, ans[name]);
            }
            // });
        }).always(function() { // zablokuj przycisk
            $("button").prop("disabled", false).text("Pobierz ponownie");
        });
    }

    $("button").on("click", function() {
        $("button").prop("disabled", true).text("Trwa wczytywanie"); // odblokuj przycisk
        loadPerson();


    });

    /*
    $(function () {
        function insertPerson(name, points) { // wrzucanie danych do DOM: dwa parametry pozyskane przez ajax
            var ul = $('ul'); // lista
            if (points <= 3) {  // w zależności od pozyskanej ilosci punktów różnicujemy kolor zmiennej...
                var classCol = 'red';

            } else if (points <= 7) {
                var classCol = 'yellow';
            } else {
                var classCol = 'green';
            }

            var newLi = $('<li>' + name + ' - ' + points + '/10</li>'); // wiersz otrzyma imię i ilość punktów...
            newLi.css('color', classCol); // oraz odpowieni do zmiennej - kolor (rowiązanie zaproponowane żeby bez arkusza css...)
            newLi.hide(); // ukrywamy wiersz

            ul.append(newLi); // po dodaniu do DOM...
            newLi.fadeIn(); // pojawi się wiers
        }

        function loadPerson() {
            $('ul').empty(); // empty: kasuje wszystkie dzieci danego elementu...
                             // tu: czyści listę żeby móc dopisywać - odnawiać

            $.ajax({
                url: 'http://showcase.itdotfocus.com/api_simple.php',
                dataType: 'json'
            }).done(function (ans) {
                console.log(ans); // wczytujemy do konsoli pobrane dane, żeby zobaczyć ich strukturę:
                                    // okazuje się, że to OBIEKT a w nim sa properties-osoby, i ich wartości w postaci punktów
                for (var prop in ans) { // iterując po obiekcie ans
                    var person = prop;// properties - nazwa właściwości - tu person
                    var pointsOfPer = ans[prop]; // wartość tej właściwości - tu ilosć punktów
                    console.log(person, pointsOfPer);
                    insertPerson(person, pointsOfPer); // tą funkcją wrzucam dane do DOM podając: osobę i ilość punktów
                                                        // funkcja ma 2 paramety
                }

            }).always(function () {
                $('button').prop('disabled', false).text('Pobierz ponownie'); // tu znowu gdy guzik wraca do aktywnosci
                                                                            // zmienia się napis na "pobierz ponownie..."
            });
        }

        $('button').on('click', function () {
            $('button').prop('disabled', true).text('Trwa wczytywanie...'); // gdy guzik nieaktywny: Trwa wczytywanie...
            loadPerson();
        });
    });

    */


});
