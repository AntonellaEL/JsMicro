document.getElementById('cont').addEventListener('click', function() {
    let palabra = document.getElementById('frase').value; 
    let total = 0;
    const vocales = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.has(palabra[i].toLowerCase())) { 
            total++;
        }
    }

    let parrafo = document.getElementById('resultado');
    parrafo.innerHTML = `Hay ${total} vocales en la frase.`;
});