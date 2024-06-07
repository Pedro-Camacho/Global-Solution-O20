window.addEventListener('scroll', () =>{
    const header = document.querySelector('header')
    header.classList.toggle('animado', window.scrollY > 0)
})


let carrosel = document.querySelector('.carrosel-content')
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
}

function mudarCarrosel(nome){
    document.getElementById(`${nome}-radio${cont}`).checked = true
    carrosel.style.transform = `translateX(-${(cont - 1)*100}vw)`
}

let inputRadio1 = document.querySelector("#objetivo-radio1")
let inputRadio2= document.querySelector("#objetivo-radio2")
let inputRadio3 = document.querySelector("#objetivo-radio3")

function checando_1(){
    if(inputRadio1.checked == true){        
        carrosel.style.transform = `translateX(-0vw)`
        console.log("passei aqui e não funcionei")
    }
}
function checando_2(){
    if(inputRadio2.checked == true){
        carrosel.style.transform = `translateX(-100vw)`
    }
}
function checando_3(){
    if(inputRadio3.checked == true){        
        carrosel.style.transform = `translateX(-200vw)`
    }
}
setInterval(()=>{
    checando_1()
    checando_2()
    checando_3()
},100)