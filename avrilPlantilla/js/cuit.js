var docu = document.getElementById("cuit");

function validarCuit(docu) {
	if (docu.length != 11) {
		return false;
	}
	var acumulado = 0;
	var digitos = docu.split("");
	var digito = digitos.pop();

	for (var i = 0; i < digitos.length; i++) {
		acumulado += digitos[9 - i] * (2 + i % 6);
	}

	var verif = 11 - acumulado % 11;
	if (verif == 11) {
		verif = 0;
	} else if (verif == 10) {
		verif = 9;
	}

	return digito == verif;
}

//alert(validarCuit("20172543597")); // este es bueno
// alert(validarCuit("20131048131")); // este es bueno
// alert(validarCuit("20131048133")); // este NO
