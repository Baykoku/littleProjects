var map = {
    mapElement: null,

    init: function () {
        mapElement = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 45.750000,
                lng: 4.850000
            },
            zoom: 15
        });
    },

    addMarker: function (station) {
        var marker = new google.maps.Marker({
            position: station.position,
            map: mapElement
        });
        marker.station = station;
        // Event click : marqueur station -- > voir les infos de chaque station
        marker.addListener('click', function () {
            app.infoStation.afficherInfoStation(this.station);
        });
    }
};