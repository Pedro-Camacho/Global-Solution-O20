window.addEventListener('scroll', () =>{
    const header = document.querySelector('header')
    header.classList.toggle('animado', window.scrollY > 0)
})

let cont= 1

setInterval(() =>{
    proximo()
}, 5000)

function proximo(){
    cont++
    if (cont > 3){
        cont = 1
    }
    mudarCarrosel('objetivo')
    mudarCarrosel('naPratica')
}

function mudarCarrosel(nome){
    document.getElementById(`${nome}-radio${cont}`).checked = true
    let carrosel = document.querySelector(`.carrosel-${nome}`)
    carrosel.style.transform = `translateX(-${(cont - 1)*100}vw)`
}

let ObjetivoRadio1 = document.querySelector("#objetivo-radio1")
let ObjetivoRadio2 = document.querySelector("#objetivo-radio2")
let ObjetivoRadio3 = document.querySelector("#objetivo-radio3")

let naPraticaRadio1 = document.querySelector("#naPratica-radio1")
let naPraticaRadio2 = document.querySelector("#naPratica-radio2")
let naPraticaRadio3 = document.querySelector("#naPratica-radio3")

let carroselObjetivo = document.querySelector(`.carrosel-objetivo`)
let carroselNaPratica = document.querySelector(`.carrosel-naPratica`)

function ObjetivoChecando_1(){
    if(ObjetivoRadio1.checked == true){        
        carroselObjetivo.style.transform = `translateX(-0vw)`
    }
}
function ObjetivoChecando_2(){
    if(ObjetivoRadio2.checked == true){
        carroselObjetivo.style.transform = `translateX(-100vw)`
    }
}
function ObjetivoChecando_3(){
    if(ObjetivoRadio3.checked == true){        
        carroselObjetivo.style.transform = `translateX(-200vw)`
    }
}



function naPraticaChecando_1(){
    if(naPraticaRadio1.checked == true){      
        carroselNaPratica.style.transform = `translateX(-0vw)`
    }
}
function naPraticaChecando_2(){
    if(naPraticaRadio2.checked == true){
        carroselNaPratica.style.transform = `translateX(-100vw)`
    }
}
function naPraticaChecando_3(){
    if(naPraticaRadio2.checked == true){        
        carroselNaPratica.style.transform = `translateX(-200vw)`
    }
}
setInterval(()=>{
    ObjetivoChecando_1()
    ObjetivoChecando_2()
    ObjetivoChecando_3()

    naPraticaChecando_1()
    naPraticaChecando_2()
    naPraticaChecando_3()
},100)