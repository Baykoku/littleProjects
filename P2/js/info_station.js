var informationStation = {
    nomStation: null,
    adresse: null,

    init: function (station) {
        this.nomStation = station.nom;
        this.adresse = station.adresse;
    },

    afficherInfoStation: function (station) {
        this.init(station);
        $('#signature_reservation').hide();
        $('#info_station').show();
        $('#station').text('Station : ' + station.nom);
        $('#adresse').text('Adresse : ' + station.adresse);
        $('#veloDispo').text('Vélo Disponible : ' + station.veloDispo);
        $('#placeVelo').text('Place de vélo disponible : ' + station.placeVelo);

        // Bouton Réserver existant si la condition est vraie.
        if (station.veloDispo === 0 || station.status === 'CLOSED') {
            $('#bouton_reservation').hide();
        } else {
            $('#bouton_reservation').show();
            $('#bouton_reservation').click(function () {
                $('#signature_reservation').show();
                app.signature.init();
            });
        }
        // Transorme anglais vers francais 
        if (station.status === 'OPEN') {
            $('#status').text('Status : Ouvert');
        } else {
            $('#status').text('Status : Fermé');
        }
    }
};
