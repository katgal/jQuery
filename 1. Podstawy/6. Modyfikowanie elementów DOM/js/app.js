$(document).ready(function() {

    // zad. test. 1
    function testEx1() {

        var newDiv = $("<div class='panel'>Moj nowy div</div>");
        var people = $(".people");
        newDiv.insertAfter(people);
    }
    testEx1();

    // zad. 1

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

    // zad. 2

    function ex2() {

        var div = $(".where-i-am");
        var newSpanEl1 = $("<span>");
        var newSpanEl2 = $("<span>");
        var newSpanEl3 = $("<span>");
        var newSpanEl4 = $("<span>");

        div.append(newSpanEl1.text("1. Jestem tutaj: append"))
            // newSpanEl1.text("1. Jestem tutaj append").appendTo(div);
        div.prepend(newSpanEl2.text("2. Jestem tutaj: prepend"));
        // newSpanEl2.text("2. Jestem tutaj prepend").prependTo(div);
        div.before(newSpanEl3.text("3. Jestem tutaj: before"));
        // newSpanEl3.text("3. Jestem tutaj before").insertBefore(div)
        div.after(newSpanEl4.text("4. Jestem tutaj: after"));
        // newSpanEl4.text("4. Jestem tutaj after").insertAfter(div);

    }
    ex2();

});
