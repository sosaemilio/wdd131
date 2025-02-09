//DOM Functions
const tempText = document.getElementById("temperature");
const conditionsText = document.getElementById("conditions");
const windText = document.getElementById("wind");
const windChillText = document.getElementById("wind-chill");

let temperature = 24;
let wind = 8;


function calculateWindChill(temperature, wind) {
    let windChill = 13.12 + 0.6215 * temperature - 11.37 * wind ** 0.16 + 0.3965 * temperature * wind ** 0.16;
    return windChill;
}

tempText.innerHTML = 24 + "C";
conditionsText.innerHTML = "Partly cloudy";
windText.innerHTML = wind + " Km/H";
windChillText.innerHTML = calculateWindChill(temperature, wind);