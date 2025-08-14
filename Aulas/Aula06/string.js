function trabalharComString(texto) {
  const totalCaracteres = texto.length;
  const maiusculas = texto.toUpperCase();
  //texto em letra minuscula
  const minuscula = texto.toLowerCase()

  //contar quantidade de palavras - método split + length
  const palavras = texto.split(' ')
  return `O total de caracteres é de ${totalCaracteres} 
  <br>Maiúsculas: ${maiusculas} 
  <br>Minúscula: ${minuscula}
  <br>Número de palavras: ${palavras.length}`;
}

// First input block
const textoDigitado = document.getElementById('inputTexto');
const resultado = document.getElementById('mostrarResultado');
const botaoReset = document.getElementById('btnReset');
const botaoProcessar = document.getElementById('btnProcessar');

// Second textarea block
const textoArea = document.getElementById('textoArea');
const mostrarResultadoArea = document.getElementById('mostrarResultadoArea');
const btnLimparTextoArea = document.getElementById('btnLimparTextoArea');

// Processar button (first block)
botaoProcessar.addEventListener('click', () => {
  const mensagem = trabalharComString(textoDigitado.value);
  resultado.innerHTML = mensagem;
  resultado.classList.remove('d-none');

  
});

// Reset button (first block)
botaoReset.addEventListener('click', () => {
  textoDigitado.value = '';
  resultado.textContent = '';
  resultado.classList.add('d-none');

});

// Live update in textarea (second block)
textoArea.addEventListener('input', () => {
  const mensagem = trabalharComString(textoArea.value);
  mostrarResultadoArea.classList.remove('d-none');
  mostrarResultadoArea.innerHTML = mensagem;
});

// Limpar button (second block)
btnLimparTextoArea.addEventListener('click', () => {
  textoArea.value = '';
  mostrarResultadoArea.classList.add('d-none');
  mostrarResultadoArea.textContent = '';
});

const textoArea2 = document.getElementById('textoArea2')
const btnConverterMaiuscula = document.getElementById('btnConverterMaiuscula')
const btnConverterMinuscula = document.getElementById('btnConverterMinuscula')
const btnConverterReverse = document.getElementById('btnConverterReverse')
const btnLimparTextoArea2 = document.getElementById('btnLimparTextoArea2')
const mostrarResultadoArea2 = document.getElementById('mostrarResultadoArea2')

btnConverterMaiuscula.addEventListener('click', ()=>{
    const texto = textoArea2.value.toUpperCase()
    mostrarResultadoArea2.classList.remove('d-none');
    mostrarResultadoArea2.innerHTML = texto
})
btnConverterMinuscula.addEventListener('click', ()=>{
    const texto = textoArea2.value.toLowerCase()
    mostrarResultadoArea2.classList.remove('d-none');
    mostrarResultadoArea2.innerHTML = texto
})


btnLimparTextoArea2.addEventListener('click', () => {
  textoArea2.value = '';
  mostrarResultadoArea2.classList.add('d-none');
  mostrarResultadoArea2.textContent = '';
});