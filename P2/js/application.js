var application = {
    diapo: null,
    map: null,
    api: null,
    ajax: null,
    infoStation: null,
    signature: null,
    infoReservation: null,

    init: function () {
        this.diapo = Object.create(diaporama);
        this.diapo.init();
        this.map = Object.create(map);
        this.map.init();
        this.api = Object.create(apiJCD);
        this.api.init();
        this.ajax = Object.create(ajax);
        this.infoStation = Object.create(informationStation);
        this.signature = Object.create(reservationSignature);
        this.infoReservation = Object.create(informationResvation);
        this.verifierLocalStorage();
    },
    
    verifierLocalStorage: function (){
        if(localStorage.getItem('heureReservation') != null){
            this.infoReservation.init();
            this.infoReservation.afficherInformationReservation();
        }
    }
};

$(document).ready(function () {
    app = Object.create(application);
    app.init();
});
