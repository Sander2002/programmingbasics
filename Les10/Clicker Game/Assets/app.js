window.addEventListener("load", init);

function init() {
    const button = document.getElementById("button");
    button.addEventListener("click", clickButton);
}

let countedNumber = 0;

let image = document.getElementById("clicker");
button.style.width = "50%";
image.style.width = "100%";

function clickButton(event) {
    event.preventDefault();
    let clicks = document.getElementById("counterdiv");
    let number = document.createElement("h2");
    const start = document.getElementById("counter");

    countedNumber = countedNumber + 1;
    number.innerText = countedNumber;
    number.id = number;

    if (countedNumber !== 1) {
        document.getElementById(number).remove();
    }

    clicks.appendChild(number);

    if (number.innerText == 10) {
        button.style.width = "45%";
    } else if (number.innerText == 20) {
        button.style.width = "40%";
    } else if (number.innerText == 30) {
        button.style.width = "35%";
    } else if (number.innerText == 40) {
        button.style.width = "30%";
    } else if (number.innerText == 50) {
        button.style.width = "25%";
    } else if (number.innerText == 60) {
        button.style.width = "20%";
    } else if (number.innerText == 70) {
        button.style.width = "15%";
    } else if (number.innerText == 80) {
        button.style.width = "10%";
    } else if (number.innerText == 90) {
        button.style.width = "5%";
    } else if (number.innerText == 100) {
        document.getElementById("button").remove();
    }
}