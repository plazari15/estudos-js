console.info('Aplicação carregada com sucesso!');
document.querySelector('.titulo').textContent = 'Aparecida Nutricionista';

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//Calculando o peso
if(peso <= 0)
  console.log('Peso inválido');

if(peso >= 800)
  console.log('Peso Inválido')

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

tdImc.textContent = imc;
