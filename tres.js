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
		}while (!(temporada == "otoño" || temporada == "otono" || temporada == "invierno" || ))





	}
}
