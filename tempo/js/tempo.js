//DOM
const pesquisa = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const nome_cidade = document.querySelector('.cidade')
const temp = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = 'd8feb52d6fc12d0943f7a4de9096f7b1'

botao.addEventListener('click',buscar_cidade)

async function buscar_cidade(){
    
    //Recebe o valor inserido.
    const cidade = pesquisa.value 
    //acessa o back-end pela API
    //await faz o fetch esperar a entrega/consulta
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta => resposta.json())

    console.log(dados)

    nome_cidade.textContent = `Tempo em ${dados.name}`
    temp.textContent = `${(dados.main.temp).toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`
}