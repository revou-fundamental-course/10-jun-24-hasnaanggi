document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    if (isNaN(temperatureInput)) {
        alert("Harap masukkan angka yang valid.");
        return;
    }

    let fahrenheit = (temperatureInput * 9/5) + 32;
    let calculation = `${temperatureInput}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;

    document.getElementById('outputFahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').value = calculation;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('temperatureForm').reset();
    document.getElementById('outputFahrenheit').value = '';
    document.getElementById('calculation').value = '';
});

document.getElementById('reverseButton').addEventListener('click', function() {
    let temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    if (isNaN(temperatureInput)) {
        alert("Harap masukkan angka yang valid.");
        return;
    }

    let celsius = (temperatureInput - 32) * 5/9;
    let calculation = `${temperatureInput}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;

    document.getElementById('outputFahrenheit').value = celsius.toFixed(2);
    document.getElementById('calculation').value = calculation;
});
