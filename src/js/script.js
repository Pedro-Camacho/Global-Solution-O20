let contProximo = 1
var visivel = document.querySelector('.visivel')
let margin = 0

window.addEventListener('scroll', () =>{
    const header = document.querySelector('header')
    header.classList.toggle('animado', window.scrollY > 0)
})

document.getElementById('radio-objetivo1').checked = true
setInterval(() =>{
    proximo()
}, 5000)

function proximo(){
    if (document.getElementById(`radio-objetivo1`).checked){
        contProximo  = 2
        visivel.style.marginLeft = '-32.8%';
    }
   
    if (document.getElementById(`radio-objetivo2`).checked){
        contProximo  = 3
        visivel.style.marginLeft = '-65,6%';
    }

    if (document.getElementById(`radio-objetivo3`).checked){
        contProximo  = 1
        visivel.style.marginLeft = '0%';
    }
    console.log(contProximo, margin)
    document.getElementById(`radio-objetivo${contProximo}`).checked = true
}
//tentado deixar selecionado
/*
let inputRadio1 = document.querySelector("#radio-objetivo1")
let inputRadio2= document.querySelector("#radio-objetivo2")
let inputRadio3 = document.querySelector("#radio-objetivo3")

function checando_1(){
    if(inputRadio1.checked == true){
        console.log("logado 1")
    }
}
function checando_2(){
    if(inputRadio2.checked == true){
        console.log("logado 2")
    }
}
function checando_3(){
    if(inputRadio3.checked == true){
        console.log("logado 3")
    }
}
setInterval(()=>{
    checando_1()
    checando_2()
    checando_3()
},100)

*/