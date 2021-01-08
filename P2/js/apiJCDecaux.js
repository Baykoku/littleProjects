var apiJCD = {
    stations: null,

    init: function () {
        stations = [];
        ajax.ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=0d6deb453ab9ab86c154d5effef5c8e0d0590d77', function (reponse) {
            var tableauxReponse = JSON.parse(reponse);
            tableauxReponse.forEach(function (tableauReponse) {
                stations = Object.create(station);
                stations.init(tableauReponse);
                app.map.addMarker(stations);
            });
        });
    }
};
