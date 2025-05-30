//DOM Functions
const tempText = document.getElementById("temperature");
const conditionsText = document.getElementById("conditions");
const windText = document.getElementById("wind");
const windChillText = document.getElementById("wind-chill");

// Functions
function calculateWindChill(temperature, wind) {
    let windChill = 13.12 + 0.6215 * temperature - 11.37 * wind ** 0.16 + 0.3965 * temperature * wind ** 0.16;
    return windChill;
}

// Variables

let temperature = 9;
let wind = 8;

if (temperature < 10 && wind > 4.8) {
    let windChill = calculateWindChill(temperature, wind);
    windChillText.innerHTML = Math.round(windChill * 100) / 100;;
}

// Apend Text
tempText.innerHTML = temperature + " C";
conditionsText.innerHTML = "Partly cloudy";
windText.innerHTML = wind + " Km/H";s