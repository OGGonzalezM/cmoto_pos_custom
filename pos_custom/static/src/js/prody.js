num2word: function(numero){
	numero = parseInt(numero);
	var cadena = new String();
	if (numero > 10000) {
		var decmiles = numero/10000;
		switch (decmiles) {
			case 9:
				cadena = " Noventa ";
			break;
			case 8:
				cadena = " Ochenta ";
			break;
			case 7:
				cadena = " Setenta ";
			break;
			case 6:
				cadena = " Sesenta ";
			break;
			case 5:
				cadena = " Cincuenta ";
			break;
			case 4:
				cadena = " Cuarenta ";
			break;
			case 3:
				cadena = " Treinta ";
			break;
			case 2:
				cadena = " Veinte ";
			break;
			case 1:
				cadena = " Diez ";
			break;


			default:

		}
		cadena += " mil "
	}else {
		if (numero <10000 && > 1000) {

		}
	}
}
