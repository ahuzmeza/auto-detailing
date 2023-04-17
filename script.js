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

$(document).ready(function () {
    // Add smooth scrolling on all links inside the navbar
    $(".navbar a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
