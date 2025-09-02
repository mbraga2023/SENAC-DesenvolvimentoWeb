$(document).ready(function () {
    const listaMoedas = $('#lista-moedas');
    const carregando = $('#loading');

    async function buscarMoedas() {
        try {
            carregando.show();
            listaMoedas.empty();

            const response = await fetch('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json');
            if (!response.ok) throw new Error('Erro ao buscar dados');

            const data = await response.json();

            data.value.forEach(moeda => {
                const item = `<li>${moeda.simbolo} - ${moeda.nomeFormatado}</li>`;
                listaMoedas.append(item);
            });
        } catch (error) {
            listaMoedas.append('<li>Erro ao carregar moedas.</li>');
            console.error(error);
        } finally {
            carregando.hide();
        }
    }

    buscarMoedas();
});
