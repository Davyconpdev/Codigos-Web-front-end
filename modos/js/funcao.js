//dom
const sol = document.querySelector('#sol')
const lua = document.querySelector('#lua')
const fundo = document.querySelector('body')

//eventos

sol.addEventListener('click', dia)
lua.addEventListener('click', noite)


//funcões

function dia(){
 fundo.className = 'claro'
}

function noite(){
 fundo.className = 'escuro'
}