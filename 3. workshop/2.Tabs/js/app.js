$(document).ready(function() {

    // punkt 2

    console.log("działa!");

    var tabs = $(".tabs").find("li");
    console.log(tabs);

    var text = $(".tabs").find("div");
    console.log(text);

    // punkt 3, 4

    tabs.on("click", function() {

        console.log("tabs click");

        tabs.removeClass("selected"); //usuwa wszystkim <li> klase selected
        $(this).toggleClass("selected"); // tylko klikniete <li> ma klase selected (podobnie jak w poprzednim zadaniu)

        // text.toggle("slow"); // pokazuja sie wszystkie teksty w divach

        text.hide(); // chowam wszystkie divy
        $("#text_" + $(this).attr("id").substr(3)).show("slow"); // pokazuje tylko ten ktoremu przypisane jest klikniete <li>
    })

});


/* zajebiaszcza wersja od Jakuba (bez grzebania w html-bez id)

$(document).ready(function () {
    console.log('działa');

    var tabsLi = $('.tabs li');
    var tabDivs = $('.tabs div');
    //console.log(tabsLi.text(), tabDivs.text());
    tabsLi.each(function(idx){
        $(this).on('click', function (event) {

            //console.log($(this).text());
           var divShow = $(this).parent().parent().children().eq(idx+1);
               //.children()[idx+1];
            //console.log(divShow.text());
//opcja. nr 1:
            tabDivs.fadeOut(100);
            divShow.delay(100).fadeIn(1000); // opóźniam wywołanie funkcji, eby powyższa sie
            // zdążyła wykonać - unikam efektu przeskoku...
//opcja nr 2.
//            tabDivs.slideUp(100);
//            divShow.delay(100).slideDown(1000);
        })
    })
});
*/
