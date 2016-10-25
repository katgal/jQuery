$(document).ready(function() {

    console.log("Sanity is for the weak!"); // Aspiring Champion

    // punkt 2 stworzenie funkcji i wypisanie zmiennych

    function parallax() {

        var scene = $(".scene");
        console.log(scene);

        var elements = $(".element");
        console.log(elements);

        var oldMousePositionX = 0; // zmienne przetrzymujace pozycje myszki po wjechaniu na scene
        var oldMousePositionY = 0;

        // punkt 3 ustawianie w css wartosci elementow z datasetu

        elements.each(function(el) { // petla each do iteracji po kazdym elemencie

            var z = $(this).attr("data-z");
            console.log(z);

            var x = $(this).attr("data-x");
            console.log(x);

            var y = $(this).attr("data-y");
            console.log(y);

            $(this).css("z-index", z);
            $(this).css("left", x + "px");
            $(this).css("top", y + "px");
        });

        // punkt 4, 5

        scene.on("mouseenter", function(event) {
            console.log("I feel Warp is overtakig me... it is a good pain");

            oldMousePositionX = event.offsetX; // pozycja myszki w momencie wejscia do scene - koordynat X
            oldMousePositionY = event.offsetY; // pozycja myszki w momencie wejscia do scene - koordynat Y
            console.log("new entring position: " + "coordinate X: " + oldMousePositionX, "coordinate Y: " + oldMousePositionY);
        });

        scene.on("mousemove", function(event) {
            console.log("That is the way to hell...");
            // punkt 5
            var currentMousePositionX = event.offsetX; // aktualna pozycja myszki koordynaty x
            var currentMousePositionY = event.offsetY; // aktualna pozycja myszki koordynaty y
            console.log(currentMousePositionX, currentMousePositionY);

            // punkt 6 target
            /* najechanie na kwadrat ma nie psuc efektu! Mamy tu event bubbling,
            więc wystarczy wykryć czy został uruchomiony na kwadracie i jak tak to po prostu to zignorować
            http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing
             */
            console.log(this);// .scene // jak jezdzimy po scene to .scene jest zarowno this i event.target
            console.log(event.target); // po najechaniu na kwadrat event.target to kwadrat!!!!!
            // jesli najedziemy kursorem kursorem na kwadrat
            if (event.target != this) { //jesli kwadrat nie jest .scene...
                return; //to nic nie rob ... jak wjezdzamy na kwadrat kursorem to kwadraty sie zatrzymuja (nie dzieje sie nic)
            }

            // punkt 7
            var mouseMoveX = currentMousePositionX - oldMousePositionX; // przesuniecie X
            var mouseMoveY = currentMousePositionY - oldMousePositionY; // przesuniecie Y
            console.log("roznicaX: " + mouseMoveX, "roznicaY: " + mouseMoveY);

            // punkt 8
            elements.each(function(el) {
                var speed = $(this).attr("data-speed"); // pobranie elementu data-speed
                console.log(speed);
                var moveLeftPosition = $(this).offset().left + mouseMoveX * speed; // obliczenie przesuniecie left
                var moveTopPosition = $(this).offset().top + mouseMoveY * speed; // obliczenie przesuniecie top
                $(this).offset({
                    left: moveLeftPosition, // ustawinie przesuniecia left w offsecie
                    top: moveTopPosition // ustawinie przesuniecia top w offsecie
                        //css left i top nie dzialaja tak samo jak offset!!!! offset() w jQ może również nadawać pozycję!
                });

            });
            // punkt 9  podstawinie pod poprzednia pozycje myszki pozycje aktualna
            oldMousePositionX = currentMousePositionX;
            oldMousePositionY = currentMousePositionY;
            // punkt 10
            // For the glory of Chaos!!!! - to dziala, naprawde dziala!!!!!!111oneone
        });
    }
    parallax();
});
