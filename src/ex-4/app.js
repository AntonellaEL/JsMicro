/*Escribe un programa que pida dos números y 
escriba “La suma de <numero-uno> con <numero-dos> 
es <resultado>”.
*/ 

const numb1= document.getElementById('numb1');
const numb2= document.getElementById('numb2');
const btn = document.getElementById('btn')

btn.addEventListener('click', sumar);

const parrafo = document.createElement("p");
document.body.append(parrafo);

function sumar() {
    const result = parseInt(numb1.value) + parseInt(numb2.value);
    parrafo.innerText = `La suma de ${numb1.value} con ${numb2.value} es Resultado: ${result}`;
}
