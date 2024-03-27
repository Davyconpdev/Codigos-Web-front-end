//dom

const lampada = document.querySelector('#lampada')
const bt01 = document.querySelector('#btliga')
const bt02 = document.querySelector('#btdesliga')

//evento

bt01.addEventListener('click', ligar)
bt02.addEventListener('click', desligar)
lampada.addEventListener('dblclick', quebrar)

//funções

function ligar() {
    lampada.src = 'images/acesa.gif'
}

function desligar() {
    lampada.src = 'images/apagada.gif'
}

function quebrar() {
    lampada.src = 'images/quebrada.jpg'
}