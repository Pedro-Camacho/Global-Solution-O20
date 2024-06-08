const btnRegistra = document.querySelector("#btnRegistra")
const listaDados = document.querySelector('#lista-dados')

const nomeUsuario = document.querySelector('#nomeUsuario')
const dataReg = document.querySelector('#dataReg')
const tempReg = document.querySelector('#tempReg')
const phReg = document.querySelector('#phReg')
const turbReg = document.querySelector('#turbReg')

const registros = [
{
    nome: "Silva",
    data: 4122003,
    temperatura: 23,
    ph: 7,
    turbidez: 2

},
]

btnRegistra.addEventListener('click', function (infosDoEvento){
infosDoEvento.preventDefault();
registra()    
})

//CREATE
function registra(){

const novoRegistro = {
    nome: nomeUsuario.value,
    data: dataReg.value,
    temperatura: tempReg.value,
    ph: phReg.value,
    turbidez: turbReg.value
}

registros.unshift(novoRegistro)

printarRegistro()
}
window.onload = printarRegistro()
//READ
function printarRegistro(){
listaDados.innerHTML = ""

registros.forEach(
    registro => {
        let novoRegistro = document.createElement('li')
        novoRegistro.innerHTML = `
        <h3>Nome:${registro.nome}</h3>
        <h4>Data:${registro.data}</h4>
        <p>Temperatura:${registro.temperatura}</p>
        <p>Ph:${registro.ph}</p>
        <p>Turbidez:${registro.turbidez}</p>
        <button onclick="editarRegistro(${registros.indexOf(registro)})"> Editar </button>
        <button onclick="apagarRegistro(${registros.indexOf(registro)})"> Apagar </button>
        `
        listaDados.appendChild(novoRegistro)
    }
)
}
//UPDATE
function editarRegistro(idReg){

let nomeEditado = prompt('Digite o novo nome',registros[idReg].nome)
registros[idReg].nome = nomeEditado

let dataEditado = prompt('Digite a data atualizada'. registros[idReg].data)
registros[idReg].data=dataEditado

let tempEditada = prompt('Edite a temperatura',registros[idReg].temperatura)
registros[idReg].temperatura= tempEditada

let phEditado = prompt('Edite o valor do Ph:',registros[idReg].ph)
registros[idReg].ph = phEditado

let turbEditada = prompt('Editar o valor da turbidez:', registros[idReg].turbidez)
registros[idReg].turbidez = turbEditada

printarRegistro()

}
//DELETE
function apagarRegistro(idReg){
registros.splice(idReg, 1)
printarRegistro()
}
