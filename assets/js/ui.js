// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");
    // Add active class to the current button (highlight it)
    var header = document.getElementById("clickLink");
    var btns = header.getElementsByClassName("nav-link");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
});