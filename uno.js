/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso=0;
	let sexo;
	let edad=0;

	let contMujer=0; //a)

	let acumEdad=0; //b)
	let contPersonas=0;

	let hombreMasPesado=0;  //c)
	let nombreHombreMasPesado="";

	for (let i=0; i<5; i++){

		do{
			nombre = prompt("Ingrese su nombre:");
		}while (!(isNaN(nombre)));

		do{
			peso = parseFloat(prompt("Ingrese el peso: (en kg)")); //mayor a 1kg
		  }while (isNaN(peso) || peso < 1);

		do{
			sexo = prompt("Ingrese su sexo: (f/m)").toLowerCase();
		}while (!(sexo == "f" || sexo == "m" || sexo == "femenino" || sexo == "masculino"));

		do{
			edad = parseInt(prompt("Ingrese su edad: (mayor a 1 año)"));
		}while (isNaN(edad) || edad < 1);


		contPersonas++; // b)
		acumEdad = acumEdad + edad;

		switch(sexo){
			case "f":
			case "femenino":
				contMujer++;
				break;

			case "m":
			case "masculino":
				if (peso > hombreMasPesado){ // no hace falta flag porque el peso minimo a ingresar
					hombreMasPesado = peso;  // es mayor al peso inicializado de hombreMasPesado
					nombreHombreMasPesado = nombre;
				}
				break;
		}

	} //end For

	document.write("a) La cantidad de mujeres es "+contMujer+"<br>"+"<br>");

	document.write("b) La edad promedio es de "+(acumEdad/contPersonas)+" años"+"<br>"+"<br>");

	document.write("c) El hombre mas pesado es "+nombreHombreMasPesado);

}
