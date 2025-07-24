function somar(a, b){
    return a + b
}

function exibirTexto(){
    console.log('Exibir alguma coisa')
}

console.log(somar(5,2))

exibirTexto()

const square = x => x * x;
console.log(square(4)); // Output: 16

const parImpar = (num) => {
    if (num % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}
let numeroAleatorio = Math.floor(Math.random() * 10);
// console.log(parImpar(numeroAleatorio) + ' - Número: ' + numeroAleatorio);

const parImparFunction = (numeroAleatorio) => {
    console.log(`Número Aleatório: ${numeroAleatorio}`);
    console.log('Verificando Par ou Ímpar:');
    for (let indice = 0; indice <= numeroAleatorio; indice++) {
        let valorAtual = numeroAleatorio - indice;

        if (valorAtual % 2 === 0) {
            console.log(`Índice ${indice}: ${valorAtual} é Par`);
        } else {
            console.log(`Índice ${indice}: ${valorAtual} é Ímpar`);
        }
    }
};
parImparFunction(numeroAleatorio)
////////////////////////////////////////////////////////////////////
let numero = numeroAleatorio;

let resultado = (numero % 2 === 0) ? 'Par' : 'Ímpar';

console.log(`${numero} é ${resultado}`);

//////////////////////////////////////////////////////////////////

function greetUserByTimeOfTheDay(nome){
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = `Bom dia ${nome}!`;
    } else if (currentHour < 18) {
        greeting = `Boa tarde ${nome}!`;
    } else {
        greeting = `Boa noite ${nome}!`;
    }

    console.log(greeting);
}

greetUserByTimeOfTheDay('João');
///////////////////////////////////////////////