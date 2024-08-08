let celsius = document.getElementById("celsius");
let kilogram = document.getElementById("kilograms");
let feet = document.getElementById("feet");

let fahrenheitResult = document.getElementById("fahrenheitResult");
let poundsResult = document.getElementById("poundsResult");
let centimetersResult = document.getElementById("centimetersResult");


let btns = document.querySelectorAll(".btn");


function convertor(event) {
    let btn = event.target;
    if (btn.classList.contains("temp")) {
        let value = celsius.value;
        if (value !== "") {
            fahrenheitResult.innerHTML = `${value}°C = ${(value * 9 / 5) + 32}°F`
        }
    }
    else if (btn.classList.contains("weight")) {
        let value = kilogram.value;
        if (value !== "") {
            poundsResult.innerHTML = `${value} kg = ${(value * 2.20462).toFixed(2)} lbs`
    
        }
    }
    else {
        let value = feet.value;
        if (value !== "") {
            centimetersResult.innerHTML = `${value} ft = ${value * 30.48} cm`
        }
    }
}

btns.forEach(btn => btn.addEventListener("click", convertor));














for (let btn of btns) { btn.addEventListener("click", convert); }