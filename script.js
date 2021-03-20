function carregar() {
    var mensagemHora = window.document.getElementById('mensagemHora')
    var mensagemHorarios = window.document.getElementById('mensagemHorarios')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var dataM = new Date()
    var minute = dataM.getMinutes()
    var dataS = new Date()
    var second = dataS.getSeconds()

    if (hora >= 0 && hora < 18){
        var periodo = 'am'
    } else {
        var periodo = 'pm'
    }

    mensagemHora.innerHTML = `Agora são ${hora}:${minute}:${second} ${periodo}`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        mensagemHorarios.innerHTML = 'Bom dia! Hora de acordar'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        imagem.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        mensagemHorarios.innerHTML = 'Boa tarde! Hora de almoçar'
    } else {
       // BOA NOITE
       imagem.src = 'fotonoite.png'
       document.body.style.background = '#515154'
       mensagemHorarios.innerHTML = 'Boa noite! Hora de dormir'
    }  
}

var mensagemAproveite = window.document.getElementById('mensagemAproveite')
var diaSem = new Date()
var dia = diaSem.getDay()

diasSemana = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sabado'
]

mensagemAproveite.innerHTML = `Aproveite ${(dia >= 1 && dia <= 5) ? 'a sua' : 'o seu'} ${diasSemana[dia]}!`
