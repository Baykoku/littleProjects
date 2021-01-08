var diaporama = {
    element: null,
    boutons: null,

    init: function () {
        element = $('#diaporama');
        boutons = $('#droite, #gauche');
        this.cliqueBouton();
    },

    suivant: function () {
        $('.imageActive').removeClass('imageActive').next().addClass('imageActive');
    },

    precedent: function () {
        $('.imageActive').removeClass('imageActive').prev().addClass('imageActive');
    },

    cliqueBouton: function () {
        var that = this;
        boutons.on('click', function () {
            if ($(this).attr('id') === 'droite') {
                if ($('.imageActive').attr('id') != 'fin') {
                    that.suivant();
                }
            } else {
                if ($('.imageActive').attr('id') != 'debut') {
                    that.precedent();
                }
            }
        });
    }
};