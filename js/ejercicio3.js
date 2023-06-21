function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperatureInput").value);
    var fromUnit = document.getElementById("fromSelect").value;
    var toUnit = document.getElementById("toSelect").value;
    var convertedTemperature;

    if (fromUnit === "C") {
        if (toUnit === "F") {
            convertedTemperature = (temperature * 9 / 5) + 32;
        } else if (toUnit === "K") {
            convertedTemperature = temperature + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (fromUnit === "F") {
        if (toUnit === "C") {
            convertedTemperature = (temperature - 32) * 5 / 9;
        } else if (toUnit === "K") {
            convertedTemperature = (temperature + 459.67) * 5 / 9;
        } else {
            convertedTemperature = temperature;
        }
    } else if (fromUnit === "K") {
        if (toUnit === "C") {
            convertedTemperature = temperature - 273.15;
        } else if (toUnit === "F") {
            convertedTemperature = (temperature * 9 / 5) - 459.67;
        } else {
            convertedTemperature = temperature;
        }
    }

    alert("El resultado de la conversion es: " + convertedTemperature.toFixed(2));
    document.getElementById("result3").innerHTML = "El resultado de la conversion es: " + convertedTemperature.toFixed(2);
}
