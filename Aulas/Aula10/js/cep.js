function buscarCep() {
    const inpCep = document.getElementById('cep');
    const divErro = document.getElementById('mostraErro');
    const btnBuscaCep = document.getElementById('buscaCep');
    const limparFormBtn = document.getElementById('btn-limpar');

    const inpRua = document.getElementById('rua');
    const inpBairro = document.getElementById('bairro');
    const inpCidade = document.getElementById('cidade');
    const inpUf = document.getElementById('uf');

    function limparForm() {
         inpRua.value = '';
         inpBairro.value = '';
         inpCidade.value = '';
         inpUf.value = '';
         divErro.textContent = '';
    }

    limparFormBtn.addEventListener('click', limparForm);

    btnBuscaCep.addEventListener('click', async () => {
        limparForm();

        const cepDigitado = inpCep.value;
        const cepNormalizado = cepDigitado.replace(/\D/g, ''); // remove all non-digits

        if (cepNormalizado.length !== 8) {
            divErro.textContent = 'CEP deve ter exatamente 8 números.';
            return;
        }

        try {
            const req = await fetch(`https://viacep.com.br/ws/${cepNormalizado}/json/`);
            const data = await req.json();

            if (data.erro) {
                divErro.textContent = 'CEP não encontrado';
                return;
            }

            inpRua.value = data.logradouro || '';
            inpBairro.value = data.bairro || '';
            inpCidade.value = data.localidade || '';
            inpUf.value = data.uf || '';

        } catch (error) {
            console.error('Erro ao buscar o CEP:', error);
            divErro.textContent = 'Erro na busca do CEP. Tente novamente.';
        }
    });
}

buscarCep();
