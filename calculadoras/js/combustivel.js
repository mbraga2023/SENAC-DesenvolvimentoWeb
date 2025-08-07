

export default function combustivel(){
    // console.log('A fnução Combustivel foi executada')

    const botaoCalcularCombustivel = document.getElementById('calcularCombustivel')
    const resultadoCalculoCombustivel = document.getElementById('resultadoCombustivel')

    botaoCalcularCombustivel.addEventListener('click', function(){
        const alcool = document.getElementById('alcool').value
        const gasolina = document.getElementById('gasolina').value
        if(isNaN(alcool)|| isNaN(gasolina) || alcool <=0 || gasolina<=0){
            console.log('Entrou na excessão')
            resultadoCalculoCombustivel.innerHTML = 'Preencha os campos com valores válidos'
            resultadoCalculoCombustivel.className= ''
            resultadoCalculoCombustivel.classList.add('alertaVermelho')
            return
        }

        let indiceCombustivel = alcool/gasolina
        let classificacao
        let cor

        if(indiceCombustivel <= 0.7){
          classificacao = 'Alcool'   
          cor = 'alertaAmarelo'        
        } else {
            classificacao = 'Gasolina'
            cor = 'alertaVerde'
        }

        resultadoCalculoCombustivel.innerHTML = `Melhor combustível para abastecimento <br>
        <strong>${classificacao}</strong>`
        resultadoCalculoCombustivel.className = ''
        resultadoCalculoCombustivel.classList.add(cor)
        resultadoCalculoCombustivel.style.borderRadius = "10px";
    })

}