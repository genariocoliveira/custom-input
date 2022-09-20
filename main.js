function espelho() {
    var c = document.querySelector(".input").value
    alert(`Você digitou ${c}`)  
}
function press() {
    var press = document.querySelector('.input').value
    var res = document.querySelector('.res').innerHTML = press
    press.value = press.value.toUpperCase();
}


var x = document.querySelector(".input");
x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
    document.querySelector(".input-personalizado").style.boxShadow = '0 0 10px 0 #b319d4';
}

function myBlurFunction() {
    document.querySelector(".input-personalizado").style.boxShadow = "";
}