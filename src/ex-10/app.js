document.getElementById('contar').addEventListener('click', function() {
    let frase = document.getElementById('frase').value.toLowerCase();
    let conteoVocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];
        if (conteoVocales.hasOwnProperty(letra)) {
            conteoVocales[letra]++;
        }
    }

    let resultadoTexto = `
        A: ${conteoVocales.a}<br>
        E: ${conteoVocales.e}<br>
        I: ${conteoVocales.i}<br>
        O: ${conteoVocales.o}<br>
        U: ${conteoVocales.u}
    `;

    let parrafo = document.getElementById('resultado');
    parrafo.innerHTML = resultadoTexto;
});