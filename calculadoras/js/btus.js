export default function btus(){
    const btnCalcularBtu = document.getElementById('calcularBtus')
    const solDaManha = document.getElementById('sol-manha')
    const solDaTarde = document.getElementById('sol-tarde')
    const resultadoBtus = document.getElementById('resultadoBtus')

    btnCalcularBtu.addEventListener("click", function() {
    const largura = document.getElementById('largura').value
    const comprimento = document.getElementById('comprimento').value
        console.log('largura ' + largura)
        console.log('comprimento ' + comprimento)

        if(isNaN(largura) || isNaN(comprimento) ||largura <= 0 || comprimento <= 0 ){
            console.log('Exception')
            resultadoBtus. innerHTML = 'Insira uma medida válida'
            resultadoBtus.className = ''
            resultadoBtus.classList.add('alertaVermelho')
            return
        } 

        if(!solDaManha.checked && !solDaTarde.checked){
            console.log('Exception')
            resultadoBtus. innerHTML = 'Selecione Sol da Manhã ou Sol da Tarde'
            resultadoBtus.className = ''
            resultadoBtus.classList.add('alertaAmarelo')
            return
        } 
        const metragem = largura * comprimento
        console.log('metragem ' + metragem)

        const VALOR_MANHA = 600
        const VALOR_TARDE = 800

        let btus

        if (solDaManha.checked) {
            btus = metragem * VALOR_MANHA
            console.log('sol manhã')
        } else if(solDaTarde.checked) {
            btus = metragem * VALOR_TARDE
            console.log('sol manhã')
        }
        console.log(`BTUs ${btus}`)
        resultadoBtus.innerHTML = `O aparelho precisa ter <br>
        <strong>${btus.toLocaleString()}</strong> BTUS`
        resultadoBtus.className = ''
        resultadoBtus.classList.add('alertaVerde')
        resultadoBtus.style.borderRadius = "10px";
    })

    

}