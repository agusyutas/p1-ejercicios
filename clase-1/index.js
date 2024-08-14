// Pido dos datos externos para comparar
const max = parseInt(prompt("ingrese el maxima para comparar"));
const min = parseInt(prompt("ingrese el minimo para comparar"));

// Pido el numero para comparar
const num = parseInt(prompt("Ingrese el numero para comparar"));

// Verificar si el numero esta en rango

if(num>= min && num <= max){
    alert("El numero esta en rango");

}
else{
    alert("No esta en rango");
    }

    
// Si es PAR
if(num % 2 == 1){
    alert("Es impar")
}
else{
    alert("Es par")
}