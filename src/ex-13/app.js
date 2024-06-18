function mostrarDivisores() {
    
    let numero = parseInt(document.getElementById('numero').value);


    if (isNaN(numero) || numero <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, ingresa un número entero positivo.';
        return;
    }


    let divisores = [];

 
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    document.getElementById('resultado').innerHTML = `Los divisores de ${numero} son: ${divisores.join(', ')}.`;
}
