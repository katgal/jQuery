/* 1. Formularz rejestracji na stronie
2. Użytkownik podaje imię i e-mail
3. Kiedy przesyła formularz (zdarzenie "submit" na formularzu) to robimy zapytanie AJAX
4.
API: http://showcase.itdotfocus.com/rest_simple.php
type:'POST',
dataType:'json',
data: //tu się wysyła dane
5. API zwraca dwie możliwe odpowiedzi:
 A) ans.result == false, wtedy pokazuje ans.error - pokazujemy wtedy komunikat użytkownikowi
 B) ans.result == true, wtedy pokazuje ans.login i wyświetla go użytkownikowi
6. Na czas wysyłania AJAX znika formularz, a w komunikacie pokazane jest "Wczytywanie..."
*/

$(function() {

            var form = $("form");
            var name = $(".name");
            var email = $(".email");


            form.on("submit", function(e) {
                    e.preventDefault();
                    $.ajax({
                        url: "http://showcase.itdotfocus.com/rest_simple.php",
                        type: "POST", // czyli wysyłamy
                        dataType: "json",
                        data: {
                            name: name.val(), // pobrac waertosc inputa
                            email: email.val() // pobrac wartosc inputa
                        }
                    }).done(function(ans) {
                        console.log(ans);
                        //Object {result: false, error: "Error! Incorrect e-mail!"} //email bez @
                        // Object {result: false, error: "Error! Empty e-mail!"} //jak nic nie wpisze
                        // Object {result: true, login: "KATEGMAILCOM"} //pokazuje poprawne dane
                        insertMessage();
                });
            });
                // dodac diva z komunikatem nad formularzem
            function insertMessage() {

                if (ans.result == false) {
                    //ans.error
                    var msg = $("<div>" + ans.error + "</div>");
                    form.before(msg).show();

                    if (ans.result == true) {
                        // ans.login
                        var msg = $("<div>" + ans.login + "</div>");
                        form.before(msg).show();
                    }
                }

            });


        /*najprostszy atak ddos za pomoca ajaxa
        for (var i = 0; i<100; i++){
          $.ajax({
            url: "http://wp.pl"?_i+
          })
        }
        */
/*
$(function () {

    var namE = $('#name');
    var emaiL = $('#email');
    var submitBtn = $('#submitBtn');
    var infoDiv = $('#info');

    $('form').on('click', function (event) { // blokuję przeładowanie trony na formularzu
        event.preventDefault();
    });

    function myR() {
        infoDiv.text('Hello nice to see U... please wait for a while...');
        if ((submitBtn).prop('disabled', true)) { // po uruchomieniu guzika na czas gdy guzik jest nieaktywny
            infoDiv.text("Trwa wczytywanie..."); // div-info pokazuje komunikat
            $('form').fadeOut(); // formularz znika
        }
        $.ajax({
            url: 'http://showcase.itdotfocus.com/rest_simple.php',
            type: 'POST', // bo zapytanie polega na wysłaniu danych 'data'
            dataType: 'json', // odpowiedź będzie json
            data: {
                name: namE.val(), // przekazuję dane z inputa name
                email: emaiL.val() // j.w. email
            }
        }).done(function (ans) {
            if (ans.result == false) { // gdy odpowiedź jest niezgodna (nie spełnia warunków? brak takiego atrybutu)
                console.log(ans.error); //
                infoDiv.text(ans.error); // wypisuje w info: wiadomość o błędzie

            } else {
                infoDiv.text(ans.login); // gdy jest spełniony wynikiem jest info: LOGIN
            }
            namE.val(''); // czyścimy inputy po wczytaniu
            emaiL.val(''); // j.w.
            $('form').fadeIn(); // pojawia się formularz


        }).fail(function () {
            infoDiv.text('Sorry... Something wrong'); // gdyby poszło coś nie tak...
        })

    }

    $('#submitBtn').on('click', function () { // po kliknięciu submit
        myR();  // uruchamiamy funkcję 'POST' itd
        $('#submitBtn').prop('disabled',false); // następnie guzik submita musi stać się aktywny dla kolejnych działań

    })

});
*/
