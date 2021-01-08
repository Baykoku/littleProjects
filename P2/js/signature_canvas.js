var reservationSignature = {

    init: function () {
        canvasElt = document.getElementById('canvas');
        ctxCanvas = canvasElt.getContext('2d');
        ctxCanvas.clearRect(0, 0, canvas.width, canvas.height);

        flag = 'false';
        dot_flag = 'false';
        boutonsSignature = $('#signature_effacer, #signature_reserver');

        this.gererEvent();
        this.gererBoutonsSignature();
    },

    gererEvent: function () {
        canvasElt.addEventListener('mousemove', function (e) {
            app.signature.verifierConditionEtatSouris('move', e);
        }, false);
        canvasElt.addEventListener('mousedown', function (e) {
            app.signature.verifierConditionEtatSouris('down', e);
        }, false);
        canvasElt.addEventListener('mouseup', function (e) {
            app.signature.verifierConditionEtatSouris('up', e);
        }, false);
        canvasElt.addEventListener('mouseout', function (e) {
            app.signature.verifierConditionEtatSouris('out', e);
        }, false);
    },

    verifierConditionEtatSouris: function (actionSouris, e) {
        e.preventDefault(); /* A VERIFIER */
        if (actionSouris === 'down') {
            prevX = e.cientX;
            prevY = e.clientY;
            currX = e.clientX - canvasElt.getBoundingClientRect().left;
            currY = e.clientY - canvasElt.getBoundingClientRect().top;

            flag = 'true';
            dot_flag = 'true';
            if (dot_flag) {
                ctxCanvas.beginPath();
                ctxCanvas.fillStyle = 'greenyellow';
                ctxCanvas.lineWidth = 2;
                ctxCanvas.fillRect(currX, currY, 2, 2);
                ctxCanvas.closePath();
                dot_flag = 'false';
            }
        }
        if (actionSouris === 'up' || actionSouris === 'out') {
            flag = 'false';
        }
        if (actionSouris === 'move') {
            if (flag === 'true') {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvasElt.getBoundingClientRect().left;
                currY = e.clientY - canvasElt.getBoundingClientRect().top;

                app.signature.dessinerLaSignature();
            }
        }
    },

    dessinerLaSignature: function () {
        ctxCanvas.beginPath();
        ctxCanvas.moveTo(prevX, prevY);
        ctxCanvas.lineTo(currX, currY);
        ctxCanvas.strokeStyle = 'greenyellow';
        ctxCanvas.lineWidth = 2;
        ctxCanvas.stroke();
        ctxCanvas.closePath();
    },

    gererBoutonsSignature: function () {
        var that = this;
        boutonsSignature.on('click', function () {
            if ($(this).attr('id') === 'signature_effacer') {
                ctxCanvas.clearRect(0, 0, canvas.width, canvas.height);
            } else {
                app.infoReservation.enregistrerInfoReservation();
                app.infoReservation.init();
            }
        });
    }
};
