function calcularDesconto() {
    const inpValorProduto = document.getElementById('valor-produto')
    const inpValorDesconto = document.getElementById('percentual-desconto')
    const btnCalcular = document.getElementById('calcular-btn')
    const displayPrecoFinal = document.getElementById('resultado')

    btnCalcular.addEventListener('click', () => {
        const valorOriginal = inpValorProduto.value
        const desconto = inpValorDesconto.value
        if (desconto > 100) {
            displayPrecoFinal.innerHTML = `Desconto não pode ser maior ou igual a 100`
            displayPrecoFinal.style.color = 'red'
            inpValorProduto.value = ''
            inpValorDesconto.value = ''
            return
        } else if (valorOriginal <= 0 || desconto < 0) {
            displayPrecoFinal.innerHTML = `Preço inválido. Tente novamente`
            displayPrecoFinal.style.color = 'red'
            inpValorProduto.value = ''
            inpValorDesconto.value = ''
            return
        }

        const precoFinal = valorOriginal * (1 - (desconto / 100))
        displayPrecoFinal.style.color = 'green'
        displayPrecoFinal.innerHTML = `Preço com desconto: R$ ${precoFinal.toFixed(2)}`
    })

}

calcularDesconto()