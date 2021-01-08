var station = {
    position: null,
    adresse: null,
    nom: null,
    placeVelo: 0,
    veloDispo: 0,
    status: null,

    init: function (station) {
        this.position = station.position;
        this.adresse = station.address;
        this.nom = station.name;
        this.placeVelo = station.available_bike_stands;
        this.veloDispo = station.available_bikes;
        this.status = station.status;
    },
};
