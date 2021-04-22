window.onload = function () {
    var calcBtn = document.getElementById("calculate");
    calcBtn.onclick = main;
    var clearBtn = document.getElementById("clear");
    clearBtn.onclick = byby;
    var milesClr = document.getElementById("miles");
    milesClr.ondblclick = byby2;
    var gallonsClr = document.getElementById("gallons");
    gallonsClr.ondblclick = byby3;
};
function isValid() {
    var isAllDataValid = true;
    var milesBox = document.getElementById("miles");
    var milesDriven = milesBox.value;
    if (milesDriven == "" || isNaN(parseFloat(milesDriven))) {
        isAllDataValid = false;
        milesBox.nextElementSibling.innerHTML = "Miles Driven and Gallons Used is required and must be a number";
    }
    var gallonBox = document.getElementById("miles");
    var gallonsUsed = gallonBox.value;
    if (gallonsUsed == "" || isNaN(parseFloat(gallonsUsed))) {
        isAllDataValid = false;
        gallonBox.nextElementSibling.innerHTML = "Gallons Used and Miles Driven is required and must be a number";
    }
    else {
        return isAllDataValid;
    }
}
function main() {
    if (isValid()) {
        var miles = document.getElementById("miles").value;
        var gallons = document.getElementById("gallons").value;
        var mpg = calculateMPG(parseFloat(miles), parseFloat(gallons));
        displayResults(mpg);
    }
}
function displayResults(milesPerGallon) {
    var mpgBox = document.getElementById("mpg");
    mpgBox.value = milesPerGallon.toString();
}
function calculateMPG(milesDriven, gallonsUsed) {
    var milesPerGallon = milesDriven / gallonsUsed;
    return milesPerGallon;
}
function byby() {
    var milebox = document.getElementById("miles");
    milebox.value = "";
    milebox.nextElementSibling.innerHTML = "";
    var gallonbox = document.getElementById("gallons");
    gallonbox.value = "";
    gallonbox.nextElementSibling.innerHTML = "";
    var mpgBox = document.getElementById("mpg");
    mpgBox.value = "";
    mpgBox.nextElementSibling.innerHTML = "";
}
function byby2() {
    var mileBox = document.getElementById("miles");
    mileBox.value = "";
    mileBox.nextElementSibling.innerHTML = "";
}
function byby3() {
    var gallonbox = document.getElementById("gallons");
    gallonbox.value = "";
    gallonbox.nextElementSibling.innerHTML = "";
}
