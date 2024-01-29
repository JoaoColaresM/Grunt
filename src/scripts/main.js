var a = document.getElementById('area')

function clicar(){
    a.innerText = 'Clicou!'
    a.style.background = 'darkred'
}

function entrar(){
    a.innerText = 'Entrou!'
    a.style.background = 'rgb(220,220,9)'
}

function sair(){
    a.innerText = 'Saiu!'
    a.style.background = 'darkgreen'
}