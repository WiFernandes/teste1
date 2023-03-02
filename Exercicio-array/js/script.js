const entrada = document.querySelector('#entrada');
const soma = document.querySelector('#soma');
const teste = document.querySelector('#teste');
const container = document.querySelector('.container');
const vazio = document.querySelector('#vazio');
var total = 0;
const numeros = [];
function callback(){
    let valor = document.querySelector('#valor').value;
    numeros.push(valor);
    console.log(numeros);
}
entrada.addEventListener('click', callback);
soma.addEventListener('click', () => {
    for(let i = 0; i < numeros.length; i++){
        total += parseInt(numeros[i]);
     };
    const novaDiv = document.createElement('p');
    novaDiv.setAttribute("id", "newP")
    const contentDiv = document.createTextNode(total);
    novaDiv.appendChild(contentDiv);
    let troca = vazio.parentNode;
    troca.replaceChild(novaDiv, vazio);
    novaDiv.removeAttribute("id", "newP");
    novaDiv.setAttribute("id", "vazio");
    
    numeros.splice(0, numeros.length);
    console.log(numeros);
    return total;
});