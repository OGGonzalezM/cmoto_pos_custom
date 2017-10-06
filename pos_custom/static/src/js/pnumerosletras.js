},
aletras: function(numero){
	var cadena = "";

	//Identificar el numero mayor
	if ((numero/1000000) > 0) {
		if ((numero/1000000) == 1) {
			cadena = "Un millón " + aletras(numero%1000000);
		}else{
			cadena = aletras(numero/1000000) + " Millones " + aletras(numero%1000000);
		}
	}
	else {
		//Indentificar si lleva miles
		if ((numero/10000) > 0) {
			if ((numero/1000) == 1) {
				cadena = " Mil " + aletras(numero%1000);
			}else {
				cadena = aletras(numero/1000) + " Mil " + aletras(numero%1000);
			}
		}
		else {
			//Identificar centenas
			if ((numero/100) > 0) {
				if ((numero/100) == 1) {
					if ((numero%100) == 0) {
						cadena = " Cien ";
					}else {
						cadena = " Ciento " + aletras(numero%100);
					}
				}else {
					if ((numero/100) == 5) {
						cadena = " Quinientos " + aletras(numero%100);
					}else {
						if ((numero%100) == 9) {
							cadena = " Novencientos " + aletras(numero%100);
						}else {
							cadena = aletras(numero/100)+"cientos" + aletras(numero%100);
						}
					}
				}
			}
			//Identificar las decenas
			else {
				if ((numero/10) > 0) {
					switch ((int)(numero/10)) {
						case 1:
							switch ((int)(numero%10)) {
								case 0:
										cadena = " Diez ";
									break;
								case 1:
										cadena = " Once ";
									break;
								case 2:
										cadena = " Doce ";
									break;
								case 3:
										cadena = " Trece ";
									break;
								case 4:
										cadena = " Catorce ";
									break;
								case 5:
										cadena = " Quince ";
									break;
								default:
									cadena = " Diez y " + aletras(numero%10);
									break;
							}
							break;
						case 2:
								switch ((int)(numero%10)) {
									case 0:
										    cadena = " Veinte ";
										break;
									default:
									  cadena = " Veinti " + aletras(numero%10);
										break;
								}
							break;
							case 3:
								switch ((int)(numero%10)) {
									case 0:
										    cadena = " Treinta ";
										break;
									default:
									  cadena = " Treinta y " + aletras(numero%10);
										break;
								}
							break;
							case 4:
								switch ((int)(numero%10)) {
									case 0:
										    cadena = " Cuarenta";
										break;
									default:
									  cadena = " Cuarenta y " + aletras(numero%10);
										break;
								}
							break;
							case 5:
								switch ((int)(numero%10)) {
									case 0:
										    cadena = " Cincuenta";
										break;
									default:
									  cadena = " Cincuenta y  " + aletras(numero%10);
										break;
								}
							break;
							case 6:
									switch ((int)(numero%10)) {
										case 0:
											    cadena = " Sesenta ";
											break;
										default:
										  cadena = " Sesenta y " + aletras(numero%10);
											break;
									}
							break;
							case 7:
									switch ((int)(numero%10)) {
										case 0:
											    cadena = " Setenta ";
											break;
										default:
										  cadena = " Setenta y " + aletras(numero%10);
											break;
									}
							break;
							case 8:
									switch ((int)(numero%10)) {
										case 0:
											    cadena = " Ochenta";
											break;
										default:
										  cadena = " Ochenta y " + aletras(numero%10);
											break;
									}
							break;
							case 9:
									switch ((int)(numero%10)) {
										case 0:
											    cadena = " Noventa ";
											break;
										default:
										  cadena = " Noventa y " + aletras(numero%10);
											break;
									}
							break;
					}
				}
				else {
					switch ((int)(numero)) {
						case 0: cadena = "Cero" break;
						case 1: cadena = "Uno" break;
						case 2: cadena = "Dos" break;
						case 3: cadena = "Tres" break;
						case 4: cadena = "Cuatro" break;
						case 5: cadena = "Cinco" break;
						case 6: cadena = "Seis" break;
						case 7: cadena = "Siete" break;
						case 8: cadena = "Ocho" break;
						case 9: cadena = "Nueve" break;
					}
				}
			}
		}
	}
	return cadena;
}
