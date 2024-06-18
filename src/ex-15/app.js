function verificarPrimo() {
    let numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero <= 1 || !Number.isInteger(numero)) {
        document.getElementById('resultado').innerHTML = 'Por favor, ingrese un número entero positivo mayor que 1.';
        return;
    }

    let esPrimo = esNumeroPrimo(numero);

    if (esPrimo) {
        document.getElementById('resultado').innerHTML = `${numero} es un número primo.`;
    } else {
        document.getElementById('resultado').innerHTML = `${numero} no es un número primo.`;
    }
}

function esNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
