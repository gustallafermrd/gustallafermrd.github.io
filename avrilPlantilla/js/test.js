function validaCuit(cuit) {
	if (typeof cuit == "undefined") return true;
	cuit = cuit.toString().replace(/[-_]/g, "");
	if (cuit == "") return true;
	if (cuit.length != 11) return false;
	else {
		var mult = [ 5, 4, 3, 2, 7, 6, 5, 4, 3, 2 ];
		var total = 0;
		for (var i = 0; i < mult.length; i++) {
			total += parseInt(cuit[i]) * mult[i];
		}
		var mod = total % 11;
		var digito = mod == 0 ? 0 : mod == 1 ? 9 : 11 - mod;
		console.log(digito);
	}
	return digito == parseInt(cuit[10]);
}

//$.validator.addMethod("cuit", validaCuit, "CUIT/CUIT Inválido");
