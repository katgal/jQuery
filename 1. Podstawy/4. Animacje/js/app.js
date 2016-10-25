$(document).ready(function() {

    // zad. test. 1
    function testEx1() {

        var buttons = $(".buttons").find("button");

        buttons.on("click", function() {
            console.log($(this).text());
        })
    }
    testEx1();

    //zad. test 2

    function testEx2() {
        var content = $(".content")
        content.on("click", function() {

                $(this).animate({
                    opacity: 0.5
                }, 2000).animate({
                    opacity: 1
                }, 700); // po kropce moge dodac kolejne animacje; albo dodać callback w postaci funkcji po przeciku przed zamknięciem nawiasu okrąglego )
            })
            // jak dam osobno też zadziala, ale jednak chaneling lepszy
            // $(this).animate({
            // opacity: 1
            // },700);
            // })
    }
    testEx2();

    // zad. 1
    function ex1() {

        var buttons = $(".buttons");
        var content = $(".content")

        var first = $(".box1");
        var second = $(".box2");
        var third = $(".box3");
        // buttons.first().on("click", function(){
        first.on("click", function() {
            content.show("slow");
        })

        // buttons.eq(1).on("click", function(){
        second.on("click", function() {
            content.hide("slow");
        })

        // buttons.eq(2).on("click", function(){
        third.on("click", function() {
            content.toggle(2000);
        })
    }
    ex1();

    // zad. 2

    function ex2() {
        var img = $(".images");

        var img1 = img.find(".img1");
        var img2 = img.find(".img2");
        var imgAll = img.find("img");

        img2.hide(); // domyślnie ukryty obrazek nr 2

        imgAll.on("click", function() { // jesli dam img1 to akcja będzie wykonana tylko jeden raz

            $(this).fadeOut("slow", function() { // callback, zeby zdjecia sie zmianialy po kazdym kliknieciu
                $(this).siblings().fadeIn('slow');
            });
        })
    }
    ex2();

    // zad. 3
    function ex3() {

        var list = $(".select-body");
        var arrow = $(".arrow-down");
        var status = false; // status pomocniczy, po otwarciu strony element nie bedzie sie wyswietlal
        // true element widoczny; false element niewidoczny

        arrow.on("click", function() {

                if (status == false) {
                    list.slideDown(); // lista się rozwinie
                    status = true;
                    arrow.css("transform", "rotate(180deg)") // obrócenie strzałaki; można też w css border-top, border-bottom
                } else {
                    list.slideUp(); // lista się zwinie
                    status = false;
                    arrow.css("transform", "rotate(360deg)") // moze byc tez 0deg
                }
            })
            //sprawdzic sobie toggle w dokumentacji jquery
    }
    ex3();

    // zad. 4

    function ex4() {

        var runEl = $(".runnig-element");

        runEl.on("click", function() {

            $(this).find("div").animate({
                left: "+=20px" // dzieki += będzie się przesuwać z każdym kliknięciem
            }, 2000, function() {
                console.log("Przesuwanie zakonczone");
            })
        })
    }
    ex4();

});
