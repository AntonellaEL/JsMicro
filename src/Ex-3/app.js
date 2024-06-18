
 const inputUsername= document.getElementById('username')
 const btnValidate=document.getElementById('btn-validate')
 const mainBlock = document.querySelector('main')

 btnValidate.addEventListener('click',()=>{
    const username = inputUsername.value
    render(username)
})

function render(username) {

    if(isEmpty(username)){
    mainBlock.innerHTML = /*html*/ `
    <span>Debe introducir su nombre</span>`
     return
    }
    mainBlock.innerHTML = /*html*/ `
    <span>Hola ${username}</span>`
    
}

function isEmpty() {
    const stringLength = inputUsername.value.length
    return(stringLength === 0) ? true : false
    
}