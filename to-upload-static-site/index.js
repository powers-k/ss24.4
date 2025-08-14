document.addEventListener("DOMContentLoaded", function () {
    // Code to execute after the DOM has loaded

    // Example: Change the background color of the header when clicked
    var header = document.querySelector("header");
    header.addEventListener("click", function () {
        header.style.backgroundColor = getRandomColor();
    });

    // Example: Display an alert when the user clicks on a navigation link
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("You clicked on: " + link.textContent);
        });
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
