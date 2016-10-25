$(document).ready(function() {

    // punkt 2
    console.log("Do you hear the voices too?") // sprawdzam czy dziala

    function sendForm() {

        var form = $("#contactForm");
        console.log(form);

        var name = $("#nameInput");
        console.log(name);

        var eMail = $("#emailInput");
        console.log(eMail);

        var msg = $("#messageInput");
        console.log(msg);

        var error = $(".error");
        console.log(error);

        // punkt 3

        form.on("submit", function(event) { // ustawiam event submit na formularzu
            // punk 4

            var nameInput = name.val();
            var eMailInput = eMail.val();
            var msgInput = msg.val();
            var validEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(eMailInput); // regula js na validacje emaila

            error.text("") // po kazdym kliknieciu czyszcze tresc wiadomosci error

            if (nameInput.length <= 5) { // imie musi byc dluzsze niz 5 znakow
                error.text("Your name must be longer than 5 signs!"); // jesli nie to error
                event.preventDefault(); // blokuje przelodowanie strony jesli wystapi blad
                return;
            }

            if (!validEmail) { // sprawdzamy czy email jest oprawny, jesli nie to error
                error.text("Your email address is invalid! Try again!");
                event.preventDefault(); // blokuje przelodowanie strony jesli wystapi blad
                return;
            }

            if (msgInput.length <= 10) { // wiadomosc musi byc dluzsza niz 10 znakow
                error.text("Your message must be longer than 10 signs!"); // jesli nie to error
                event.preventDefault(); // blokuje przelodowanie strony jesli wystapi blad
                return;
            }

        })
    }
    sendForm();
});
