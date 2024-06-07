let inputRadio1 = document.querySelector("#radio-objetivo1")
let inputRadio2= document.querySelector("#radio-objetivo2")
let inputRadio3 = document.querySelector("#radio-objetivo3")
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
//tentado deixar selecionado

function checando_1(){
    if(inputRadio1.checked == true){        
        
        visivel.style.marginLeft = '0%';        
    }
}
function checando_2(){
    if(inputRadio2.checked == true){
        
        visivel.style.marginLeft = '-32.8%';
    }
}
function checando_3(){
    if(inputRadio3.checked == true){
        
        visivel.style.marginLeft = '-65,6%';
    }
}
setInterval(()=>{
    checando_1()
    checando_2()
    checando_3()
},100)