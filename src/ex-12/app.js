document.getElementById('div').addEventListener('click', function() {
    let numero = document.getElementById('divisible').value;
    let resultado = '';

    if (numero % 2 == 0) {
        resultado += "Es divisible entre 2<br>";
    }
    if (numero % 3 == 0) {
        resultado += "Es divisible entre 3<br>";
    }
    if (numero % 5 == 0) {
        resultado += "Es divisible entre 5<br>";
    }
    if (numero % 7 == 0) {
        resultado += "Es divisible entre 7<br>";
    }
    if (resultado === '') {
        resultado = "No es divisible entre 2, 3, 5 o 7";
    }

    document.getElementById('resultado').innerHTML = resultado;
});