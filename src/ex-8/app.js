document.getElementById('mostrarVocales').addEventListener('click', function() {
    let frase = document.getElementById('frase').value; 
    let vocalesEncontradas = [];
    const vocales = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i].toLowerCase();
        if (vocales.has(letra) && !vocalesEncontradas.includes(letra)) { 
            vocalesEncontradas.push(letra);
        }
    }

    let parrafo = document.getElementById('resultado');
    parrafo.innerHTML = `Las vocales en la frase son: ${vocalesEncontradas.join(', ')}`;
});
