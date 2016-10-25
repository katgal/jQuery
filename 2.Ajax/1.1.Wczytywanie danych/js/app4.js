/*1. zrobić listę ul
2. pod nią przycisk "pobierz dane kolejnej osoby"
3. po kliknięciu uzupełnia listę wszystkimi osobami z API
http://showcase.itdotfocus.com/api_simple.php
*/


$(function() {
// tworzymy nowe elementy listy
    function insertPerson(name) {
        var ul = $("ul");
        var newLi = $("<li>" + name + "</li>");
        newLi.hide();
// dodajemy nowe lementy listy na koniec
        ul.append(newLi);
        newLi.fadeIn();
    }

    function loadPerson() {
        $.ajax({
            url: "http://showcase.itdotfocus.com/api_simple.php", // źródło
            dataType: "json" // typ/forma przekazywanych danych to json
        }).done(function(ans) {
            for (var i = 0; i < ans.length; i++) { // dla kazdego el.
                console.log(ans[i])
                var name = ans[i].title + " " + ans[i].name + " " + ans[i].surname; // dodaje wszystkie elementy na raz - cala liste
                insertPerson(name);
            }
            // });
        }).always(function() { // zablokuj przycisk
            $("button").prop("disabled", false).text("Pobierz ponownie");
        });
    }

    $("button").on("click", function() {
        $("button").prop("disabled", true).text("Trwa wczytywanie"); // odblokuj przycisk
        loadPerson(); // uruchamiamy funkcję łądowania osoby ze źródła


    });


});
