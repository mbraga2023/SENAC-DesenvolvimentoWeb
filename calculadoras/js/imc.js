export default function imc() {
    // console.log('A função IMC foi executada')
    const botaoImc = document.getElementById('calcularImc')
    const resultadoImc = document.querySelector('#resultadoImc')

    botaoImc.addEventListener('click', function () {
        const peso = document.getElementById('peso').value
        const altura = document.getElementById('altura').value

        //validação de entrada
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0 || altura >= peso) {
            resultadoImc.innerHTML = 'Preencha corretamente o <br>Peso e a Altura'
            resultadoImc.className = ''
            resultadoImc.classList.add('alertaVermelho')
            return
        }


        let valorImc = peso / (altura * altura)
        let classificacao
        let cor

        if (valorImc < 18.5) {
            classificacao = 'Magreza'
            cor = "alertaVermelho"
            // resultadoImc.style.backgroundColor = "rgba(25, 255, 4, 0.5)";
        } else if (valorImc < 24.9) {
            classificacao = 'Normal'
            cor = "alertaVerde"

            // resultadoImc.style.backgroundColor = "rgba(0, 140, 255, 0.5)";
        } else if (valorImc < 29.9) {
            classificacao = 'Sobrepeso'
            cor = "alertaAmarelo"

            // resultadoImc.style.backgroundColor = "rgba(255, 238, 0, 0.5)";
        } else {
            classificacao = 'Obesidade'
            cor = "alertaVermelho"

            // resultadoImc.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        }

        resultadoImc.innerHTML = `Resultado <strong>${classificacao}</strong>:<br>
         Índice <strong>${valorImc.toFixed(2)}</strong>`
        // resultadoImc.classList.remove('alertaVermelho','alertaVerde','alertaAmarelo')
        resultadoImc.className = ''
        resultadoImc.classList.add(cor)
        resultadoImc.style.borderRadius = "10px";



    })
}