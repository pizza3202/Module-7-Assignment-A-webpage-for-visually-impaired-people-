document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggle-high-contrast");
    toggleButton.addEventListener("click", function() {
        var body = document.getElementsByTagName("body")[0];
        body.classList.toggle("high-contrast");
    });
});