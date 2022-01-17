const turnOn = document.getElementById('turnOn')
const turnOf = document.getElementById('turnOf')
const lamp = document.getElementById('lamp')
const turnRes = document.getElementById('turnRes')

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!isLampBroken ()) {
        lamp.src = './imagens/ligada.jpg'
    }
   
}

function lampOf () {
    if (!isLampBroken ()) {
        lamp.src = './imagens/desligada.jpg'
    }
   
}

function lampBroken () {
    lamp.src = './imagens/quebrada.jpg'
}

function lampRes () {
    if(isLampBroken ()) {
        lamp.src = './imagens/desligada.jpg'
    }
  
}

turnOn.addEventListener ('click', lampOn)
turnOf.addEventListener ('click', lampOf)
turnRes.addEventListener ('click', lampRes)

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOf)
lamp.addEventListener('dblclick', lampBroken)


