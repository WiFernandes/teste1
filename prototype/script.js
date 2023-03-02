/*function pessoas(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const dadosPessoa1 = new pessoas('joao', 20);
//console.log(dadosPessoa1);
//console.log(pessoas.prototype);

const pais = 'Brasil';
const cidade = new String('Rio');

const carro = {
    marca: 'fiat',
    preco: 2000,
    andar() {
        return true;
    }
}*/
function dados(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
dados.prototype.displayData = function (){
    return (`${this.nome} ${this.sobrenome}`);
};
const viewData = new dados('willian', 'fernandes', '23');
const li = document.querySelector('li');
console.log(li.click.constructor.name);
console.log(li.innerText.constructor.name);
console.log(li.value.constructor.name);
console.log(li.hidden.constructor.name);
console.log(li.offsetLeft.constructor.name);
console.log(li.click().constructor.name);

object.getOwnPropertyNames(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(document.prototype);
