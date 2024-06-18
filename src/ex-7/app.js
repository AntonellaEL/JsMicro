document.getElementById('cont').addEventListener('click', function() {
    let palabra = document.getElementById('frase').value; 
    let total = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i].toLowerCase() === 'a') { 
            total++;
        }
    }

    let parrafo = document.getElementById('resultado');
    parrafo.innerHTML = `Hay ${total} letras "a" en la frase.`;
});
