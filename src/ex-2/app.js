

const num1=3
const num2=6
const total= 0


function sum(numb1, numb2) {
    let total= num1 + num2
    return total
    
}

function render(numb1,numb2, total) {
    const divApp = document.getElementById('app');
    const txt= ` la suma ${num1} + ${num2 } es ${total}`
    divApp.innerHTML=txt
    
} 

render(num1,num2,sum(num1,num2))