
function adicionarNome(nome){
    window.sessionStorage.setItem('nome', nome)
}
function adicionarEndereço(endereço){
    window.sessionStorage.setItem('endereço', endereço)
}
function adicionarDias(dias){
    window.sessionStorage.setItem('dias', dias)
}
function adicionarAbertura(abertura){
    window.sessionStorage.setItem('abertura', abertura)
}
function adicionarFechamento(fechamento){
    window.sessionStorage.setItem('fechamento', fechamento)
}
let nomes = document.getElementById('nome').addEventListener('blur', (Event)=>{
    console.log(`Nome: ${Event.target.value}`)
    adicionarNome(Event.target.value)
})
let endereço = document.getElementById('endereço').addEventListener('blur', (Event)=>{
    console.log(`Endereço: ${Event.target.value}`)
    adicionarEndereço(Event.target.value)
})
let dias = document.getElementById('dias').addEventListener('blur', (Event)=>{
    console.log(`Dias de funcionamento: ${Event.target.value}`)
    adicionarDias(Event.target.value)
})
let abertura = document.getElementById('abertura').addEventListener('blur', (Event)=>{
    console.log(`Horário de abertura: ${Event.target.value}`)
    adicionarAbertura(Event.target.value)
})
let fechamento = document.getElementById('fechamento').addEventListener('blur', (Event)=>{
    console.log(`Horário de fechamento: ${Event.target.value}`)
    adicionarFechamento(Event.target.value)
})
function log(){
    console.log("Preparando envio...")
}