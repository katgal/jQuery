$(document).ready(function() {

    console.log("Chaos consume us!"); // sprawdzam czy dziala

    function sliderInfinite() {

        // punk 2 zapisuje elementy do zmiennych

        var buttonNext = $("#nextPicture");
        console.log(buttonNext);

        var buttonPrev = $("#prevPicture");
        console.log(buttonPrev);

        var liElements = $("ul").find("li");
        console.log(liElements);

        var pictureIndex = 0; // zmienna przechowujaca aktualny index obrazka (na poczatku bedzie to 0)

        var imgWidth = 400; // szerokosc jednego obrazka
        console.log(imgWidth);

        // punkt 3 - klonowanie

        var firstLi = liElements.first(); // pierwszy element listy
        console.log(firstLi.children().attr("src")); // wyswietlla img src
        var lastLi = liElements.last(); // ostatni element listy
        console.log(lastLi.children().attr("src"));

        var ulContainer = $("ul"); // zmienna musi byc przed tworzeniem klonow bo do czegos trzeba je przyczepic

        var firstClone = firstLi.clone().appendTo(ulContainer); // klonowanie i wstawinie pierwszego li na koniec listy
        var lastClone = lastLi.clone().prependTo(ulContainer); // klonowanie i wstawianie ostatniego li na poczatek listy

        console.log($('ul').children().length); // pokazuje 8

        // punkt 4 - ustawianie szerokosci kontenera
        // UWAGA!!!! Musimy wziać "nowe" <li> bo bylo klonowanie,
        //a nie korzystac z var liElements bo pokaze 6 elmentow! czyli 2400 px!!!!
        var ulWidth = $("li").length * imgWidth + "px"; // slider czyli 8 obrazkow obok siebie, (w tym dwa klony)
        console.log(ulWidth); // 3200px                    // stad mnozenie by dotrzec na konkretna pozycje zdjecia

        ulContainer.width(ulWidth); // ustawiam szerokosc kontenera

        // punkt 5 , 6

        buttonNext.on("click", function() {
            console.log("For the glory of Chaos!");

            var newPosition = imgWidth * (pictureIndex + 1); // zmienna ze zmiana obrazka o 1, czyli szerokosc obrazka razy index
            ulContainer.animate({
                left: -newPosition // animacja obrazka w prawo; musi byc na minusie!!
            }, 500, function() {
                if (liElements.length - 1 > pictureIndex) {
                    pictureIndex = pictureIndex + 1; // po kazdym kliknieciu zmienia sie index obrazka o +1
                } else {
                    ulContainer.css("left", 0); // jesli index większt niż dlugosc li, to wroc na pierwsze zdjecie
                    pictureIndex = 0;
                }
            });

            buttonPrev.on("click", function() {
                console.log("The dark powers triumph!"); // na razie dupy nie urywa

                var newPosition = imgWidth * (pictureIndex - 1); // zmienna ze zmiana obrazka o 1, czyli szerokosc obrazka razy index
                ulContainer.animate({
                    left: -newPosition
                }, 500, function(){
                  if (pictureIndex>1){
                    pictureIndex = pictureIndex - 1; //

                  } else{
                    newPosition = imgWidth * (pictureIndex - 1);
                    ulContainer.animate({
                        left: -newPosition // animacja obrazka w lewo
                    }, 500);
                    pictureIndex = liElements.length;
                  }
              });

            });

        });
    }
    sliderInfinite();

});

/*
//zaczyna z -44px w css
$(document).ready(function () {
    console.log('działa');

    function sliderA() {
        var btnNext = $('#nextPicture');
        var btnPrev = $('#prevPicture');
        var liEl = $('li'); // element listy


        var firstImg = liEl.eq(0);
        console.log(firstImg.children().attr('src'));
        var lastImg = liEl.eq(liEl.length - 1);
        console.log(lastImg.children(0).attr('src'));


        var indxOfVisibleImg = 1; // to wżne żeby po władowaniu wczytywał pozycję nie 0 (bo to dubel obraka) a 1
        var imgWidth = 400; // szerokość obrazka
        var ulContener = $('.slider').find('ul');

        var firstGoLast = firstImg.clone(true).appendTo(ulContener); // klonuję el. pierwszy i dodaję na końcu
        var lastGoFirst = lastImg.clone(true).prependTo(ulContener); // klonuję el. ostatni i dodaję na początku
        console.log($('ul').children().length); // mam 8 elementów

        var sliderWidth = $('li').length * imgWidth + "px"; // slider to pasek z obrazków 6 x szerokosc ale
        ulContener.outerWidth(sliderWidth); // biorę szerzej, zeby nie dodawać pikseli do 6xszerokosc obrazka

// w css startujemy z pozycji ul left = -400px aby być na pierwotnie pierwszym obrazku (ale w DOM jest to element [1])
        // 7. funkcja poiadająca opis działania eventów:

        function slideDoing(button) {
            if (button == 'prevPicture') {
                var newPos = imgWidth * (1 - indxOfVisibleImg);
                ulContener.animate({left: newPos}, function () {
                    if (indxOfVisibleImg > 1) {
                        indxOfVisibleImg = indxOfVisibleImg - 1; //zmienia się index obrazka widzialnego teraz
                    } else {
                        newPos = imgWidth * (liEl.length);
                        ulContener.css({left: -newPos});
                        indxOfVisibleImg = liEl.length;
                    }
                });

            } else if (button == 'nextPicture') {
                var newPos = -imgWidth * (1 + indxOfVisibleImg);
                ulContener.animate({left: newPos}, function () {
                    if (indxOfVisibleImg < liEl.length - 1) {
                        indxOfVisibleImg = indxOfVisibleImg + 1; // zmienia się index obrazka widzialnego teraz
                    } else {
                        ulContener.css({left: 0}); // bez animacji natychmiast niepostrzeżenie przestaw pozycję
                        indxOfVisibleImg = 0;
                    }
                });
            }
        }

        $('button').on('click', function (event) { // obojętnie na który z guzików ...
            //console.log('next_clicked');
            var whichBtn = $(this).attr('id');
            slideDoing(whichBtn);
        });
    }
    sliderA();
});
*/
/*
$(document).ready(function() {
    function InfiniteSlider(config) { // definiuje zmienne w konstruktorze
        this.$slider = config.$slider;
        this.$prevButton = config.$prevButton;
        this.$nextButton = config.$nextButton;
        this.$pictures = this.$slider.find('li');
        this.$ulContainer = this.$slider.find('ul');
        this.pictureWidth = 400;
        this.pictureCounter = 0;
    };

    InfiniteSlider.prototype.setContainerWidth = function() { // metoda ustawijaca szerokość kontenera
        this.$ulContainer.width(this.pictureWidth * this.$pictures.length);
    };

    InfiniteSlider.prototype.bindButtons = function() { // metoda przypisujaca event do guzikw
        this.$prevButton.on('click', this.prev.bind(this));
        this.$nextButton.on('click', this.next.bind(this));
    };

    InfiniteSlider.prototype.next = function() {
        if (this.pictureCounter === this.$pictures.length - 1) {
          this.addMore();
        }

        if (this.pictureCounter < this.$pictures.length - 1) {
            var newPictureCounter = this.pictureWidth * (1 + this.pictureCounter);
            this.$ulContainer.animate({
                left: -newPictureCounter
            });
            this.pictureCounter += 1;
        } else {
            this.$ulContainer.animate({
                left: 0
            });
            this.pictureCounter = 0;
        }
    };

    InfiniteSlider.prototype.prev = function() {
        if (this.pictureCounter == 0) {
            this.pictureCounter = this.$pictures.length;
            var newPictureCounter = this.pictureWidth * (1 - this.pictureCounter);
            this.$ulContainer.animate({
                left: newPictureCounter
            });
            this.pictureCounter -= 1;
        } else {
            var newPictureCounter = this.pictureWidth * (1 - this.pictureCounter);
            this.$ulContainer.animate({
                left: newPictureCounter
            });
            this.$pictureCounter -= 1;
        }
    };

    InfiniteSlider.prototype.addMore = function () {
      // handle adding images
      this.$pictures.first().clone().appendTo(this.$ulContainer);
      this.$pictures.last().clone().prependTo(this.$ulContainer);
    }

    InfiniteSlider.prototype.initialize = function() {
        this.setContainerWidth();
        this.bindButtons();
    }



     //* Wywołanie slidera

    var slider = new InfiniteSlider({
        $slider: $('.slider'),
        $prevButton: $('#prevPicture'),
        $nextButton: $('#nextPicture'),
    });

    slider.initialize();
});

*/
