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