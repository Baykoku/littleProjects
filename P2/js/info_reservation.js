var informationResvation = {
    init: function () {
        $('#confirmation_reservation').show();
        this.afficherInformationReservation();
    },

    afficherInformationReservation: function () {
        heureReservation = localStorage.getItem('heureReservation');
        heureActuel = Math.floor(new Date().getTime() / 1000);
        
        $('#confirmation_reservation').html('<p class="nom_contenu">Votre réservation</p><p>Station : ' + localStorage.getItem('station') + '.</p>' + '<p>Lieu : ' + localStorage.getItem('adresse') + '. </p>' + '<p> La réservation expire dans : ' + this.calculerTempsRestant(heureActuel, heureReservation) + '.</p>');
        
        if (tempsRestant > 0) {
            setTimeout(function () {
                app.infoReservation.afficherInformationReservation();
            }, 1000);
        } else {
            $('#confirmation_reservation').html('<p class="nom_contenu">Votre réservation</p><p id="expi">Votre reservation est expiré.</p>');
        }
    },

    enregistrerInfoReservation: function () {
        heureActuel = Math.floor(new Date().getTime() / 1000);
        localStorage.setItem('heureReservation', heureActuel);
        localStorage.setItem('station', app.infoStation.nomStation);
        localStorage.setItem('adresse', app.infoStation.adresse);
    },

    calculerTempsRestant: function (heureActuel, heureReservation) {
        var tempsMax = 20 * 60;
        var tempsPasse = heureActuel - heureReservation;
        tempsRestant = tempsMax - tempsPasse;
        var min = Math.floor(tempsRestant / 60);
        var sec = tempsRestant % 60;
        return min + 'minutes' + ' ' + sec + 'secondes';
    },
};