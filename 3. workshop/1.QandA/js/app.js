$(document).ready(function() {

    // punkt 2

    console.log("działa!");

//zapisywanie zmiennych po przecinku i cachowanie
/* np var divQA = $(".QA"),
          questionsH1 = divQA.find("h1"),
          answerP = divQA.find("p");
*/
    var questions = $("div").find("h1");
    console.log(questions);


    var answer = $("div").find("p");
    console.log(answer);
    answer.hide();
    // punkt 3, 4, 5

/*bierzemy rodzica.on a event ma byc wykonany na questionsH1 - delegacja eventow
divQA.on("click", questionsH1, function(){})
*/
    questions.on("click", function() {
        console.log("h1 click");
        answer.slideUp("slow"); // trza dodac zeby zwijala sie odppowiedz, ktora jest powyzej lub pod tą kliknieta
        // answer.toggle("slow"); // znikaja, pojawiaja sie wszystkie odpowiedzi naraz
        if(!$(this).next().is(":visible")){ // jesli element nie jest widoczny to wstrzymaj kolejke i go wyswietl
        $(this).next().finish().toggle("slow"); // znikaja, pojawiaja sie pojedynczo/finish powoduje,
        //ze jesli klikniemy wiele razy to nie bedzie sie otwieral wiele razy
// sprobowac z clearQueue(), finish(), stop()
}
    });

});
