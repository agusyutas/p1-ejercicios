let contadorDesaprobados = 0, contadorAprobados = 0, contadorPromocionados = 0;  //camelcase

let acumuladorDesaprobados = 0, acumuladorAprobados = 0, acumuladorPromocionados = 0;

let maxNota = 1, minNota = 10;

do {
    
    do{
        let nota = parseInt(prompt("Ingrese una nota del 1 al 10"));
        
        if(isNaN(nota)){
            alert("Ingrese una nota numerica");
        }
        else if(nota < 1){
            alert("la nota debe ser 1 o mas");
        }
        else if(nota > 10){
            alert("la nota no puede ser mayor a 10");
        }

    }while((nota < 1) || (nota > 10) || isNaN(nota));


    if(nota > 4){
        contadorDesaprobados ++;
        acumuladorDesaprobados = acumuladorPromocionados + nota;
    }
    else{
        contadorAprobados ++;
        acumuladorAprobados += nota;
        if(nota >=7){
            contadorPromocionados ++;
            acumuladorPromocionados += nota;
        }
    }

    if(nota > maxNota){

        maxNota = nota;
    }
    if(nota < minNota){
        minNota = nota;
    }

} while(confirm("Otra nota?"));

alert(`Hubo ${contadorDesaprobados} alumnos desaprobados y su nota promedio fue de ${acumuladorDesaprobados / contadorDesaprobados.toFixed(1)}`);

alert(`Hubo ${contadorAprobados} alumnos aprobados y su nota promedio fue de ${acumuladorAprobados / contadorAprobados.toFixed(1)}`);

alert(`Hubo ${contadorPromocionados} alumnos promocionados y su nota promedio fue de ${acumuladorPromocionados / contadorPromocionados.toFixed(1)}`);

alert(`la nota minima del curso fue ${minNota} `);
alert(`la nota maxima del curso fue ${maxNota} `);