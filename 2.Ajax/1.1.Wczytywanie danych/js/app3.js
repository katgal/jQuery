/*1. zrobić listę ul
2. pod nią przycisk "pobierz dane kolejnej osoby"
3. po kliknięciu uzupełnia listę po prostu osobą, która pobiera API
http://showcase.itdotfocus.com/api_simple.php
*/
// już nie dizała

$(function() {

    function insertPerson(name) {
        var ul = $("ul");
        var newLi = $("<li>" + name + "</li>");
        newLi.hide();

        ul.append(newLi);
        newLi.fadeIn();
    }

    function loadPerson() {
        $.ajax({
            url: "http://showcase.itdotfocus.com/api_simple.php",
            dataType: "json"
        }).done(function(ans) {
            var name = ans.title + " " + ans.name + " " + ans.surname;
            insertPerson(name);
        });
    }

    $("button").on("click", function() {
        loadPerson();


    });


});
