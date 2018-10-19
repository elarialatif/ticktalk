// A $( document ).ready() block.
// $(document).ready(function() {

//     // Add active class to the current button (highlight it)
//     var header = document.getElementById("clickLink");
//     var btns = header.getElementsByClassName("nav-link");
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function() {
//             var current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace(" active", "");
//             this.className += " active";
//         });
//     }
//     // next & previous

// });



slideW = $('#items').width();
current = 0;
$(document).on('click', '#prev', function(e) {

    if (current > 0 && current <= $('#items').children().length - 1) {
        current--;
    }

    console.log(current);
    e.preventDefault();
    $('#items').animate({
        scrollLeft: slideW * current - 100
    }, 600);

});

$(document).on('click', '#next', function(e) {

    if (current < $('#items').children().length - 1)
        current++;
    console.log(current);
    e.preventDefault();
    $('#items').animate({
        scrollLeft: slideW * current + 100
    }, 600);

});