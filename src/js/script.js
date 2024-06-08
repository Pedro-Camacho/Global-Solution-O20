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

let carroselObjetivo = document.querySelector(`.carrosel-objetivo`)

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

setInterval(()=>{
    ObjetivoChecando_1()
    ObjetivoChecando_2()
    ObjetivoChecando_3()
},100)