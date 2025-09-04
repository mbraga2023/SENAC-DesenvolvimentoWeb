$(document).ready(function () {
    const listaMoedas = $('#lista-moedas');
    const carregando = $('#loading');
    const apiUrl = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json'
    const dataHoje = new Intl.DateTimeFormat('en-US').format(new Date());
    console.log(dataHoje)


    async function buscarMoedas() {
        carregando.show()
        $.getJSON(apiUrl).done(data => {
            data.value.forEach(element => {
                const simbolo = element.simbolo
                const nome = element.nomeFormatado;
                const cotacaoHoje = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${simbolo}'&@dataCotacao='${dataHoje}'&$top=100&$format=json`

                $.getJSON(cotacaoHoje).done(cotacao => {
                    const venda = cotacao.value[4].cotacaoVenda
                    const compra = cotacao.value[4].cotacaoCompra

                    const vendaFormatada = venda.toLocaleString('pr-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })
                    const compraFormatada = compra.toLocaleString('pr-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })

                    const item = `<li class='moeda-item'>
                <span class='simbolo'>${simbolo}</span> 
                ${nome}  
                <span class='valorCompraVenda'> 
                Compra ${compraFormatada} - 
                Venda ${vendaFormatada} </span>
                </li>`;

                    listaMoedas.append(item);
                })
            });
        })
        carregando.hide()


        // try {
        //     carregando.show();
        //     listaMoedas.empty();

        //     const response = await fetch('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json');
        //     if (!response.ok) throw new Error('Erro ao buscar dados');

        //     const data = await response.json();

        //     data.value.forEach(moeda => {
        //         const item = `<li>${moeda.simbolo} - ${moeda.nomeFormatado}</li>`;
        //         listaMoedas.append(item);
        //     });
        // } catch (error) {
        //     listaMoedas.append('<li>Erro ao carregar moedas.</li>');
        //     console.error(error);
        // } finally {
        //     carregando.hide();
        // }
    }

    buscarMoedas();
});
