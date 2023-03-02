/*function Carro(marcaAtribuida, preco){
    this.marca = marcaAtribuida;
    this.preco = preco;
}

const honda = new Carro('honda', 2000);

function carro2(marcaAtribuida, precoInicial){
    let taxa = 1.2;
    let precoFinal = precoInicial * taxa;
    this.marca = marcaAtribuida,
    this.preco = precoFinal
}

const fiat = new carro2('fiat', 2000);
console.log(fiat)*/

//const dom = {
//    seletor: 'li',
//    element(){
//        return document.querySelector(this.seletor);
//    },
//    ativar(){
//        this.element().classList.add('ativo');
//    }
//}
//dom.seletor = 'ul';
//dom.ativar();

function dom(seletor){
    this.element = function (){
        return document.querySelector(seletor);
    },
    this.ativar = function (){
        this.element().classList.add('Ativo');
    }
}
const li = new dom('li');
const ul = new dom('ul');

function dados(nome, idade){
    this.nome = nome,
    this.idade = idade,
    this.andar = function(){
        console.log(`${this.nome} andou`);
    }
}

const teste = new dados('willian', 23);
console.log(teste);

function manipularDom(seletor){
    this.element = function (){
        return document.querySelectorAll(seletor);
    },
    this.addClass = function(classe){
        this.element().forEach((element) => {
            element.classList.add(classe);
        })
    },
    this.removeClass = function (classe){
        this.element().forEach((element) => {
            element.classList.remove(classe);
        })
    }
}

const verificar = new manipularDom('li');