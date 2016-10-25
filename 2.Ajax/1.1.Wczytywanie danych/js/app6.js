$(function() {

var div = $("#gallery");
    function insertPhoto(photoData, index) {

        // stworzenie elementów listy

        var newLi = $("<div class='photo'></div>");
        newLi.hide();
        // zmiana koloru za pomoca css
        newLi.css("backbround-image", "url("' + photoData.thumbnailUrl +'")");
        // dodawanie listy
        div.append(newLi);
        setTimeout(function(){
          newLi.fadeIn();
        }, 250*index);
    }

    function loadGallery() {

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/photos",
            dataType: "json"
        }).done(function(ans) {

            for (var i = 0; i < 50; i++) {
              insertPhoto(ans[i], i);

            }
           });
         }
        loadGallery();

});

/*
$(function () {
    function insertPhoto(phhotoData, index) { // wrzucanie danych do DOM
        var div=$('#gallery');

        function insertPhoto (photoData, index) { // funkcja potzebuje dwóch parametrów
            var newPhoto=$('<div class="photo"></div>'); // tworzy div
            newPhoto.hide(); // ukrywa go...
            newPhoto.css('background-image', 'url("'+photoData.thumbnailUrl+'")'); //wrzuca do niego pobrany w ajax obrazek:
                                    // jako tło diva i w url'u będzie link pobrany... ubrany w cudzysłów
            div.append(newLi); // dodaje div z zawartoscią do DOM
            setTimeout(function() { // z zadanym czasem wrzuca kolejne pobrane obrazki do DOM
                newPhoto.fadeIn(); // aby się pojawiały

            }, 250*index); // co 1/4 sekundy będzie się dodawał kolejny obrazek... stąd mnożnik przez i (index to 2-gi parametr)
        }
    }
    function loadGallery() { // pobierz galerię
        $.ajax({
            url: 'https//jasonplaceholder.typicode.com/photos',
            dataType: 'json'
        }).done(function(ans) { // ans to tabliza ze zdjęciami o atrybuttach: ans.thumbnailUrl ????
            for (var i=0; i<20; i++) { // weźmy jedynie pierwszysch 20 elementów za jednym władowaniem
                insertPhoto(ans[i],i); // do wrzucenia potreba dwóch parametrów: elementu i jego indexu
            }
        })
    }
    loadGallery();
});

*/
