// pido datos por promt
let categoria = parseInt(prompt("ingrese categoria (1, 2 o 3)"))
let subcategoria = prompt("Elija la subcategoria (A, B o C)")

let sueldo;
// asigno sueldo segun la categoria
if (categoria == 1){
     sueldo = 1000;
}
else if( categoria == 2){
     sueldo = 1500;
}
else{
     sueldo = 2000;
}

// multiplicador de acuerdo a la subcategoria
switch(subcategoria.toLocaleUpperCase()){

    case "A":
    sueldo = sueldo * 1.5; 
    break;

    case "B":
    sueldo = sueldo * 2; 
    break;

    case "C":
    sueldo = sueldo * 2.5; 
    break;

    default:
    sueldo = 0;
    break;
}

if(sueldo >= 1500 && sueldo <= 3000){
    alert(`El sueldo de $${sueldo} es de rango inicial`);
}
else if(sueldo > 3000 && sueldo <= 4000){
    alert(`El sueldo de $${sueldo} es de rango intermedio`);
}
else if(sueldo > 4000){
    alert(`El sueldo de $${sueldo} es de rango avanzado`);
}