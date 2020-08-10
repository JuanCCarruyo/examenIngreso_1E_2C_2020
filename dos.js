/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{

  let x="s";

  let marca;
  let precio=0;
  let peso=0;// en kg
  let tipo;  //solido o liquido

  let acumPeso=0; // a)

  let precioMaxLiquido=0; // b)
  let marcaMaxLiquido="";
  let flagL=0;

  let precioMinSolido=0;  // c)
  let marcaMinSolido="";
  let flagS=0;

  while(x=="s" || x == "si"){

    marca = prompt("Ingrese la marca del producto:");

    do{
      precio = parseFloat(prompt("Ingrese el precio del producto: (mayor a $1)"));
    }while (isNaN(precio) || precio < 1);

    
    do{
      peso = parseFloat(prompt("Ingrese el peso: (en kg)")); //mayor a 0.1kg pero no puede pesar 0kg
    }while (isNaN(peso) || peso < 0.01);

    do{
      tipo = prompt("Ingrese el tipo de producto: (sólido o líquido)").toLowerCase();
    }while (!(tipo == "solido" || tipo == "sólido" || tipo == "liquido" || tipo == "líquido"));

    acumPeso = acumPeso + peso;

    switch(tipo){
      case "liquido":
      case "líquido":
        if (flagL == 0 || precio > precioMaxLiquido){
          precioMaxLiquido = precio;
          marcaMaxLiquido = marca;
          flagL = 1;
        }
        break;

      case "solido":
      case "sólido":
        if (flagS == 0 || precio < precioMinSolido){
          precioMinSolido = precio;
          marcaMinSolido = marca;
          flagS = 1;
        }
        break;

    }

    x = prompt("Desea ingresar otro producto? (s/n)").toLowerCase(); 
  }

  document.write("a) El peso total de la compra es de "+acumPeso+"kg."+"<br>"+"<br>");

  document.write("b) La marca del más caro de los líquidos es "+marcaMaxLiquido+"<br>"+"<br>");

  document.write("c) La marca del más barato de los sólidos es "+marcaMinSolido);



  
}
