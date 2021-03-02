function colors() {
    var mainColor = document.querySelector('#mainColor');

    var colorOne = "This is my main color";
    var colorTwo = "This is my secondary color";

    if (mainColor.innerHTML == colorOne) {
        mainColor.innerHTML = colorTwo;
        mainColor.style.background = "#cc0000";
        mainColor.style.color = "#ffffff";
        mainColor.style.padding = "20px 50px";
    } else {
        mainColor.innerHTML = colorOne;
        mainColor.style.background = "#000000";
        mainColor.style.color = "#ffffff";
        mainColor.style.padding = "20px 50px";
    }
}