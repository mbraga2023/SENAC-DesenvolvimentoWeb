const pessoa = {
    nome: "João",
    idade: 34,
    salario:1450,
    status: true,
    habilidades:['java', 'react', 'c++'],
    endereco: {
        rua: 'Rua 13',
        bairro:'Centro',
        cidade: 'Limeira',
        uf: 'SP'
    }
}

//array
const carros = ['fusca', 'fox', 'civic', 'kombi', 'uno', 'ka']

// console.log(carros[2])
// console.log(pessoa.idade, pessoa.nome)
// console.log(pessoa.habilidades[2])

async function lerContato() {
    try {
        const response = await fetch('https://limeiraweb.com.br/api/contato/1');

        const data = await response.json();
        console.log('Contato:', data);
        let txtSexoTratado = ''
        if(data.sexo=='M'||data.sexo=='m'|| data.sexo=='masculino'){
            txtSexoTratado = 'MASCULINO'
        } else if(data.sexo=='F'|| data.sexo=='f'||data.sexo=='feminino'){
            txtSexoTratado = 'FEMININO'
        }

        document.getElementById('nome').innerHTML = `<strong>Nome:</strong> ${data.nome} `
        document.getElementById('celular').innerHTML = `<strong>Celular:</strong> ${data.celular}`
        document.getElementById('email').innerHTML = `<strong>Email:</strong> ${data.email}`
        document.getElementById('sexo').innerHTML = `<strong>Sexo:</strong> ${txtSexoTratado}`
        document.getElementById('idade').innerHTML = `<strong>Idade:</strong> ${data.idade}`
        
    } catch (error) {
        console.log('Erro ao buscar o contato:', error);
    }
}

//tratar texto
async function lerTodosContatos() {
  try {
    const response = await fetch('https://limeiraweb.com.br/api/contato/');
    const data = await response.json();
    console.log(data); // To inspect the response structure

    const tbody = document.getElementById('linhas');
    tbody.innerHTML = '';

    // If `data` is an array of contacts, use this:
    data.forEach((element, index) => {
      let sexoFormatado = '';
      const sexo = element.sexo ? element.sexo.toString().toLowerCase().trim() : '';

      if (['m', 'masculino'].includes(sexo)) {
        sexoFormatado = 'MASCULINO';
      } else if (['f', 'feminino'].includes(sexo)) {
        sexoFormatado = 'FEMININO';
      } else {
        sexoFormatado = 'NÃO INFORMADO';
      }
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${element.nome}</td>
          <td>${element.celular}</td>
          <td>${element.email}</td>
          <td>${sexoFormatado}</td>
          <td>${element.idade}</td>
        </tr>`;
      tbody.innerHTML += row;
    });

  } catch (error) {
    console.log('Erro ao buscar o contato:', error);
  }
}


lerContato();
lerTodosContatos()
