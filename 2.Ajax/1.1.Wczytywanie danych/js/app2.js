$(function() {
    /*
      1. Strona z opisem wszystkich ostatnio widzianych asteroid
      2. Domyślni link z API: https://api.nasa.gov/neo/rest/v1/feed?start_date=2016-07-25&end_date=2016-08-01&api_key=DEMO_KEY
      3. Będzie lista w liście, pierwsza lista to daty (near_earth_objects), druga lista to asteroidy, które wtedy były
      4. Asteroidy posiadają nazwę .name oraz link do strony katalogu asteroid .nasa_jpl_url oraz kolor: jeżeli .is_potantially_hazardous_asteroid to na czerwono, jeżeli nie, to na zielono
      5. Pod listami na końcu dwa przyciski: wcześniej i później, które wczytują ponownie zasoby, z odnośników, ktore dostajemy w link.next i link.prev.
    */

    $(function () {

        var asteroidLists = $('.asteroidsList');
        //variables for url
        var assUrl = 'http://showcase.itdotfocus.com/get_nasa_data.php';

        /* Insert Asteroids to DOM  */

        function insertContent0(aster0) {
            var dataLi = $('<li>', {class: "data"});

            dataLi.html(aster0+'<ul></ul>');

            asteroidLists.append(dataLi);

        }
        function insertContent(asterOid) {
            var asteroidListsChildUl = $('.asteroidsList>li:last>ul');
            console.log(asteroidListsChildUl);

            var astLi = $('<li>', {class: "asteroid"});
            astLi.html(asterOid);
            asteroidListsChildUl.append(astLi);
        }

        /* Load movies and insert them into the DOM
         */
        function loadAsteroids() {
            $.ajax({
                url: assUrl,
                dataType: 'json'
            }).done(function (response) {

                var date = response.near_earth_objects; //obiekt z datami  asteroid
                console.log(date); // obiekt z datami i atrybutami w postaci asteroid z atrybutami ...

                for (var prop in date) {
                    var nameAsteroid = date[prop]; // w datach: wartość atrybutów data czyli asteroidy
                    insertContent0(prop); //same daty - ta funkcja wrzuci je do listy nadrzędnej
                    nameAsteroid.forEach(function (el) { //dla każdego atrybutu tj. asteroidy

                        var danger = el.is_potantially_hazardous_asteroid; //sprawdzam jej hazardous
                        //var name = el.name;

                        if (danger) {
                            insertContent(el.name + ' <a href="' + el.nasa_jpl_url + '" class="dangerous">' + el.nasa_jpl_url + '</a>'); // otrzymuję to co chcę wrzucić do listy
                        } else {
                            insertContent(el.name + ' <a href="' + el.nasa_jpl_url + '" >' + el.nasa_jpl_url + '</a>'); // otrzymuję to co chcę wrzucić do listy
                        }
                    });
                }

            }).fail(function (error) {
                console.log(error);
            });
        }

        loadAsteroids();

    });
});
