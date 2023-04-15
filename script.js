$(document).ready(function() {
    $("#qr-button").click(function() {
        $("#qr-dropdown").toggle();
    });
    
    $(document).click(function(event) {
        var $target = $(event.target);
        if(!$target.closest('#qr-dropdown').length && 
           !$target.closest('#qr-button').length) {
            $('#qr-dropdown').hide();
        }        
    });
});
