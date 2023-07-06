const form = document.querySelector('form');
const enviarBtn = document.querySelector('#enviar');
const resultadoDiv = document.querySelector('#resultado');
const alturaInput = document.querySelector('#altura');
const pesoInput = document.querySelector('#peso');

// Adiciona um ouvinte de eventos para o botão de envio
enviarBtn.addEventListener('click', (event) => {
  event.preventDefault(); // previne o envio do formulário ao clicar no botão

  // Lê o valor da altura e peso do input e converte ',' em '.'
  let altura = parseFloat(alturaInput.value.replace(',', '.'));
  let peso = parseFloat(pesoInput.value.replace(',', '.'));

  // Calcula o IMC
  const imc = peso / (altura * altura);

  let nivelObesidade = "";
  if (imc < 18.5) {
    nivelObesidade = "abaixo do peso";
  } else if (imc < 25) {
    nivelObesidade = "com peso normal";
  } else if (imc < 30) {
    nivelObesidade = "com sobrepeso";
  } else if (imc < 35) {
    nivelObesidade = "com obesidade grau 1";
  } else if (imc < 40) {
    nivelObesidade = "com obesidade grau 2";
  } else {
    nivelObesidade = "com obesidade grau 3";
  }

  // Exibe o resultado na página
  resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)}, você está ${nivelObesidade}.`;
  resultadoDiv.style.display = 'block'; // exibir resultado
});

// Função para calcular o IMC
function calcularIMC() {
  // Lê o valor da altura e peso do input e converte ',' em '.'
  let altura = parseFloat(alturaInput.value.replace(',', '.'));
  let peso = parseFloat(pesoInput.value.replace(',', '.'));

  // Calcula o IMC
  const imc = peso / (altura * altura);
  return imc;
}
