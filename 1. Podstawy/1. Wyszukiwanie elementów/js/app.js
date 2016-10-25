$(document).ready(function() {

    // zad. test. 1
    var show = "show me that jq works";
    console.log(show);

    $("section").addClass("backgroundElement");

    // zad. test. 2

    $(".links").find("nav").addClass("hover-effect");

    // zad. 1

    $(".main").find("li").addClass("borderClass");

    // zad. 2

    $(".main").find("li").addClass("colorText").addClass("backgroundElement").fadeOut("slow").fadeIn("slow");

    // zad. 3

    // podpunkt 1
    // $("a").css("color","red");

    // podpunkt 2
    $(".menu").find("a").css("color", "red");

    // podpunkt 3

    $(".menu").find("a").addClass("redLinks");

    // podpunkt 4

    $(".menu").find("a").first().addClass("biggerFont");

    // zad. 4

    if ($("h1").hasClass("creepyHeader")) { // sprawdzam czy ma klase
        console.log("header already has got creepyHeader class!"); // jesli ma to wypisuje w konsoli
    } else {
        $("h1").addClass("creepyHeader"); //jesli nie ma, to ja nadaje
    }

});
