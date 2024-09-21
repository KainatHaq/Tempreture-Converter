function tempconverter() {
    let inputt = document.getElementById('temCon').value;
    let select = document.getElementById('Converter').value;
    let result = "";

    if (inputt === "") {
        result = "Please enter a temperature value!";
    } else if (select === "celsius") {
        let tempInFar = (inputt * 9/5) + 32;
        result = `${inputt}° Celsius is equal to ${tempInFar.toFixed(2)}° Fahrenheit`;
    } else if (select === "far") {
        let celsius = (inputt - 32) * 5/9;
        result = `${inputt}° Fahrenheit is equal to ${celsius.toFixed(2)}° Celsius.`;
    }

    document.getElementById('result').innerHTML = result;
}
function reset(){
    document.getElementById("temCon").value = "";
    document.getElementById("Converter").value = "";
    document.getElementById("result").innerHTML = "";
}