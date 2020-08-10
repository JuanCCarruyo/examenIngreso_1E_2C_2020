/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let cantidad=0;

	let B=0; // a) contadores
	let C=0;
	let S=0;
	let masViajado="";

	let masPasajeros=0; // b)
	let sexoMasPasajeros="";

	let contViajeInv=0;  //c)
	let acumPersonaInv=0;
	let promedio=0;

	let x="s";

	while(x=="s"||x=="si"){

		do{
			sexo = prompt("Ingrese el sexo del titular: (f/m)").toLowerCase();
		}while (!(sexo == "f" || sexo == "m" || sexo == "femenino" || sexo == "masculino"));

		do{
			lugar = prompt("Ingrese el lugar de vacaciones: (bariloche, cataratas o salta)").toLowerCase();
		}while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"));

		do{
			temporada = prompt("Ingrese la temporada:").toLowerCase(); //estoy tomando "otono" como temporada valida porque no tiene 'ñ' mi teclado
		}while (!(temporada == "otoño" || temporada == "otono" || temporada == "invierno" || temporada == "verano" || temporada == "primavera"));

		do{
			cantidad = parseInt(prompt("Ingrese la cantidad de personas que viajan:"));
		}while (isNaN(cantidad) || cantidad < 1); //no es valido un viaje con menos de una persona

		switch(lugar){  // a)

			case "bariloche":
				B++;
				break;

			case "cataratas":
				C++;
				break;

			case "salta":
				S++;
				break;
		}


		// b)
		if (cantidad > masPasajeros){ //no hace falta flag porque la cantidad siempre va a ser > 0
			masPasajeros = cantidad;
			sexoMasPasajeros = sexo;
		}

		// c)
		if (temporada == "invierno"){
			contViajeInv++;
			acumPersonaInv = acumPersonaInv + cantidad;
		}

		x = prompt("Desea ingresar otro viaje? (s/n)").toLowerCase();
	} //end While

	// a)
	if (B > C && B > S){
		masViajado = "Bariloche";
	}
	else if (C > B && C > S){
		masViajado = "Cataratas";
	}
	else{
		masViajado = "Salta";
	}

	switch(sexoMasPasajeros){  // cambiando sexo ingresado si es "F" o "M" por "Femenino" y "Masculino"
		case "f":
		case "femenino":
			sexoMasPasajeros = "femenino";
			break;
		
		case "m":
		case "masculino":
			sexoMasPasajeros = "masculino";
			break;
	}

	promedio = acumPersonaInv / contViajeInv; //c)

	document.write("a) El lugar mas elegido es "+masViajado+"<br>"+"<br>");

	document.write("b) El sexo del titular que lleva más pasajeros es "+sexoMasPasajeros+"<br>"+"<br>");

	if (promedio == 1){
		document.write("c) El promedio de personas por viaje, que viajan en invierno es de "+promedio+" persona."+"<br>"+"<br>"); 
		// si el promedio es de una persona para que quede en singular la respuesta
	}
	else{
		document.write("c) El promedio de personas por viaje, que viajan en invierno es de "+promedio+" personas."+"<br>"+"<br>");
	}
}
