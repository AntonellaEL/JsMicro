function mostrarDivisoresComunes() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, ingresa dos números enteros positivos.';
        return;
    }

    let divisores1 = encontrarDivisores(numero1);
    let divisores2 = encontrarDivisores(numero2);

    let divisoresComunes = divisores1.filter(divisor => divisores2.includes(divisor));

    document.getElementById('resultado').innerHTML = `Los divisores comunes de ${numero1} y ${numero2} son: ${divisoresComunes.join(', ')}.`;
}

function encontrarDivisores(numero) {
    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}
