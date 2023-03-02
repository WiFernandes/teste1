/*function quadrado(lado){
    let soma = lado * lado;
    console.log(soma);
}

const btn = document.querySelector('#numero1');
btn.addEventListener('click', () => {
    const num = document.querySelector('#inputValor').value;
    quadrado(num)
})

function corFavorita(cor){
    switch (cor) {
        case "orange":
            console.log(`favorite color ${cor}`);
            break;
        case "blue":
            console.log(`favorite color ${cor}`);
            break;
        case "":
            console.log(`you don't like colors`);
            break;
        default:
            console.log(`you don't like colors`);
    }
}
addEventListener('click', (event) =>{
    if(event.offsetY < document.documentElement.clientHeight/2){
        console.log('teste');
    }
})*/

function verificar(idade){
    if(typeof idade != "number"){
        return "informe um numero";
    }else if(idade >= 60){
        return "idoso";
    }else{
        return "adulto";
    }
}