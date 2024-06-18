function comprobarDivisibilidad() {
    let numero = document.getElementById('numero').value;
    let resultado = '';

    if (numero % 2 === 0) {
        resultado = 'Es divisible por 2.';
    } else if (numero % 3 === 0) {
        resultado = 'Es divisible por 3.';
    } else if (numero % 5 === 0) {
        resultado = 'Es divisible por 5.';
    } else if (numero % 7 === 0) {
        resultado = 'Es divisible por 7.';
    } else {
        resultado = 'El número no es divisible por 2, 3, 5 ni 7.';
    }

    document.getElementById('resultado').innerHTML = resultado;
}