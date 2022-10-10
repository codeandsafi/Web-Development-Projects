document.getElementById('button').addEventListener("click", function () {
    const tempVal = document.getElementById('value').value;

    var select = document.getElementById('unit');
    var unitVal = select.options[select.selectedIndex].value;

    let result;

    celciusToFahrenheit = (val) => {
        return ((val * 9/5) + 32);
    }

    fahrenheiteToCelcius = (val) => {
        return ((val - 32) * 5/9);
    }

    if(unitVal === 'celcius'){
        result = celciusToFahrenheit(tempVal);
        document.getElementById('output').innerHTML = `= ${result}°F`
    }
    else{
        result = fahrenheiteToCelcius(tempVal);
        document.getElementById('output').innerHTML = `= ${result}°C`
    }
})