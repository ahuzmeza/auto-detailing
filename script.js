$(document).ready(function () {
    var qrCodeContainer = document.getElementById("qr-code-container");
    var qrCode = new QRCode(qrCodeContainer, {
        text: window.location.href,
        width: 128,
        height: 128,
    });

    $("#qr-button").on("click", function () {
        $(this).toggleClass("animate__pulse");
        $("#qr-dropdown").fadeToggle();
    });

    $(document).on("click", function (event) {
        var $target = $(event.target);
        if (
            !$target.closest("#qr-dropdown").length &&
            !$target.closest("#qr-button").length
        ) {
            $("#qr-dropdown").hide();
            $("#qr-button").removeClass("animate__pulse");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header-headroom');
    const headroom  = new Headroom(header);
    headroom.init();
});
