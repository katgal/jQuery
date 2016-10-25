$(document).ready(function() {

    // zad. test. 1/zad. 1

    var navEl = $("nav");

    navEl.css("border", "solid 1px black").fadeOut("slow").slideDown(5000);
    // tak tez mozna zapisac
    // navEl.css("borderStyle", "solid").fadeOut("slow").slideDown(5000);

    // zad 2

    // wyszuka nieparzyste
    // var liEl = $(".menu li:nth-child(odd)").addClass("menuLinks")
    // console.log(liEl);

    // ale chcemy uzyc cachowania i .first, .last itp...

    // mozna zapisac w ten sposob, ale lepiej zoptymalizowac wyszukanie selektora!
    // var liEl = $(".menu li");

    var liEl = $(".menu").find("li");
    var first = liEl.first(); //  pierwszy element
    var third = liEl.eq(2); //  trzeci element
    var last = liEl.last(); //  ostatni/piaty element

    console.log(liEl); // wypisuje wszystkie elementy
    console.log(first.text(), third.text(), last.text()); // wypisuje 1,3, 5 element

    // mozna nadac klase recznie w ten sposob...
    /*
        var first = liEl.first().addClass("menuLinks");
        var third = liEl.eq(2).addClass("menuLinks");
        var last = liEl.last().addClass("menuLinks");
    */

    // albo tak...
    // umieszczamy elementy w tablicy
    var table = [first, third, last];
    /*
        mozna tak dodac [indeks tablicy], bo element tablicy jest jquerowy, w przeciwienstwie do samej tablicy
        table[0].addClass("menuLinks");
    */

    // albo zrobic petle zeby jeszcze bardziej uproscic

    // for (var i = 0; i < table.length; i++){
    // table[i].addClass("menuLinks");
  // }

    // albo tak

    // najpierw robimy z table obiekt jquerowy - dodajemy $, a potem kazdemu dajemy klase
    $(table).each(function() {
        this.addClass("menuLinks");
    })

});
