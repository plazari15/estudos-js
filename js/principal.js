document.querySelector('.titulo').textContent = 'Aparecida Nutricionista';
var pacientes = document.querySelectorAll(".paciente");


//Vai rodar o for
for (var i = 0; i <= pacientes.length; i++) {
	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;
	var PesoValido = true;
	var AlturaValida = true;

	//Calculando o peso
	if(peso <= 0 || peso >= 800){
	  console.log('Peso inválido');
	  var PesoValido = false;
	}

	if(altura <= 0 || altura >= 3.00) {
	  console.log('Altura inválido');
	  alturaEhValida = false;
	}

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	var tdImc = paciente.querySelector(".info-imc");
	var imc = peso / (altura * altura);
	if(PesoValido && AlturaValida)
	  tdImc.textContent = imc.toFixed(2);
}




//Informa se foi carregado com sucesso
console.info('Aplicação carregada com sucesso!');
