const numb1Input = document.getElementById('numb1');
const numb2Input = document.getElementById('numb2');
const parrafo = document.getElementById('resultado');

function encontrarMayor() {
    const numb1 = parseInt(numb1Input.value);
    const numb2 = parseInt(numb2Input.value);
    let mayor;
    
    if (isNaN(numb1) || isNaN(numb2)) {
        parrafo.innerText = 'Por favor, ingrese números válidos';
        return;
    }

    if (numb1 > numb2) {
        mayor = numb1;
    } else {
        mayor = numb2;
    }
    parrafo.innerText = `El mayor es ${mayor}`;
}
