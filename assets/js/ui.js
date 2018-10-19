// ================================================================
// Add / remove class based on window size
jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 991.98) {
            $('.header nav .links a.register').removeClass('register');
        } else if (ww >= 992) {
            $('.header nav .links a.register').addClass('register');
        };
    };
    $(window).resize(function() {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});
// ============================================================