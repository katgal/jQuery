$(document).ready(function() {
    // zadanie 1 z 6. modyfikowanie elementów + pojawianie sie nowych elementow listy po kliknieciu
    function ex1() {

        var people = $(".people");
        var button = people.find("input[type='submit']");
        console.log(button);

        button.on("click", function() {

            var addUser = $("#addUser").val();
            var age = $("#age").val();
            var newListEl = $("<li data-age='" + age + "'>"); // + i "" są konieczne by jq nie wywalal bledow

            // można tez tak zapisac
            // var newListEl =$("<li>", {'data-age': age});
            newListEl.text(addUser); // imie i nazwisko bedzie sie wypisywac po kliknieciu

            newListEl.appendTo($(".main")); // po kliknieciu beda sie pojawiac nowe elementy listy

            if (age <= 15) {
                newListEl.css("background", "green"); //zielony dla osób z przedziału ( do 15 lat )
            } else if (age <= 40) {
                newListEl.css("background", "blue"); //niebieski dla osób z przedziału ( 15 – 40 )
            } else if (age <= 130) {
                newListEl.css("background", "brown"); // brązowy dla osób z przedziału ( od 41 lat wzwyż )
            } else {
                alert("Error! Wrong type of data. Try again.") // alert o blednych danych, liczba poza skala albo litery
            }
        })
    }
    ex1();

    // 7.  Zaawansowane eventy
    // zad. 1 nie mam na razie pomyslu na dodanie przyciskow rowniez do nowo powstalych elementow listy
    function ex() {

        var people = $(".people");
        var liEl = $(".main").find("li");
        var przycisk = $("<button>usuń</button>");


        liEl.on("click", "button", function() { // automatycznie przypisuje event nowo utworzonym elementom (zawsze na parencie)

            $(this).parent().remove(); // usuwanie przycisku

        });
        liEl.append(przycisk); // dodaje przyciski do elementow listy po zaladowaniu strony
    }
    ex();

});
