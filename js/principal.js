document.querySelector('.titulo').textContent = 'Aparecida Nutricionista';
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var PesoValido = true;
var AlturaValida = true;

//Calculando o peso
if(peso <= 0 || peso >= 800){
  console.log('Peso inválido');
  var PesoValido = false;
}

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

if(!PesoValido)
  return false;

tdImc.textContent = imc;



//Informa se foi carregado com sucesso
console.info('Aplicação carregada com sucesso!');
