function pegarOperacao() {
  const operacao = document.querySelector('input[name="operacao"]:checked');
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultadoDiv = document.getElementById('resultado').querySelector('span');

  if (!operacao) {
    resultadoDiv.textContent = 'Por favor, selecione uma operação.';
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    resultadoDiv.textContent = 'Digite dois números válidos.';
    return;
  }

  let resultado;

  switch (operacao.value) {
    case 'soma':
      resultado = num1 + num2;
      break;
    case 'subtracao':
      resultado = num1 - num2;
      break;
    case 'multiplicacao':
      resultado = num1 * num2;
      break;
    case 'divisao':
      if (num2 === 0) {
        resultadoDiv.textContent = 'Erro: divisão por zero.';
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      resultadoDiv.textContent = 'Operação inválida.';
      return;
  }

  resultadoDiv.textContent = `${resultado}`;
}

// /// conjunto
// function conjunto(){
//     for(let a=0; a<=10; a++){
//         let conjunto = 'abcdefghijklmnopqrstuvwxyz'
//         for(let b=0; b<=5; b++){
//             console.log('#' + conjunto[a]+ [b])
//         }
//     }

// }

// conjunto()

//taboada
// function taboada(){
//     for(let num1 = 0; num1<=10; num1++){
//         for(let num2 = 0; num2<=10; num2++){
//             console.log(`Resultado: ${num1} x ${num2} = ${num1*num2}`)
//         }
//     }
// }
// taboada()

function verificaMaior() {
    const n1 = parseFloat(document.getElementById('numeroMaior1').value);
    const n2 = parseFloat(document.getElementById('numeroMaior2').value);
    const n3 = parseFloat(document.getElementById('numeroMaior3').value);
    const resultado = document.getElementById('resultadoVerificaMaior').querySelector('span');

    console.log(`n1: ${n1}`);
    console.log(`n2: ${n2}`);
    console.log(`n3: ${n3}`);

    const conjunto = [n1, n2, n3]

    let maior = conjunto[0]
    for (i = 0; i <= conjunto.length; i++) {
        if (conjunto[i] > maior) {
            maior = conjunto[i]
        }

    }    
    resultado.textContent = `O maior número é: ${maior}`;
    console.log(`o maior numero é o ${maior}`)

}

// function verificaMaior(a, b, c) {
//     if (a > b) {
//         return console.log(`o maior numero é o ${a}`)
//     } else if (a < b && b < c) {
//         return console.log(`o maior numero é o ${c}`)
//     } else {
//         return console.log(`o maior numero é o ${b}`)
//     }
// }

// verificaMaior(13,50,10)

function verificarDiaDaSemana() {
    const today = new Date();
    const dayIndex = today.getDay();
    const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const resultado = document.getElementById('resultadoDiaDaSemana').querySelector('span');

    let opcao = ''; 

    switch (dayIndex) {
        case 0:
            console.log(weekdays[0]);
            opcao = weekdays[0];
            break;
        case 1:
            console.log(weekdays[1]);
            opcao = weekdays[1];
            break;
        case 2:
            console.log(weekdays[2]);
            opcao = weekdays[2];
            break;
        case 3:
            console.log(weekdays[3]);
            opcao = weekdays[3];
            break;
        case 4:
            console.log(weekdays[4]);
            opcao = weekdays[4];
            break;
        case 5:
            console.log(weekdays[5]);
            opcao = weekdays[5];
            break;
        case 6:
            console.log(weekdays[6]);
            opcao = weekdays[6];
            break;
        default:
            resultado.textContent = `Dia inválido, tente novamente.`;
            console.log('Dia indefinido');
            return;
    }

    resultado.textContent = `Hoje é: ${opcao}`;
}


