// Contadores
let contadorDesaprobados = 0, contadorAprobados = 0, contadorPromocionados = 0;
// Acumuladores
let acumuladorDesaprobados = 0, acumuladorAprobados = 0, acumuladorPromocionados = 0;
// Variables para nota maxima y minima
let maxNota = 1, minNota = 10;

do {
    let nota;
    let notaValida = true;
    do {
        // Lo que se repite
        nota = parseInt(prompt("Ingrese una nota (1 al 10)"));
        // Esto va a devolver:
        // - Numero entre 1 y 10
        // - Numero menor a 1
        // - Numero mayor a 10
        // - NaN

        if(isNaN(nota)) {
            alert("Ingrese una nota numérica");
            notaValida = false;
        }
        else if(nota < 1) {
            alert("La nota debe ser 1 o más");
            notaValida = false;
        }
        else if(nota > 10) {
            alert("La nota no puede ser mayor a 10");
            notaValida = false;
        }
        else {
            notaValida = true;
        }

    } while(!notaValida);   // notaValida != true

    // Empiezo a preguntar
    if(nota < 4) {
        // Desaprobado
        contadorDesaprobados = contadorDesaprobados + 1;
        acumuladorDesaprobados = acumuladorDesaprobados + nota;
    }
    else {
        // Aprobado
        contadorAprobados += 1;
        acumuladorAprobados += nota;

        // Pregunto si ademas, promociono
        if(nota >= 7) {
            // Si, promociono tambien
            contadorPromocionados++;
            acumuladorPromocionados += nota;
        }
    }

    // Pregunto si la nueva nota es mayor a la anterior
    if(nota > maxNota) {
        // Si es asi, encontre un nuevo maximo
        maxNota = nota;
    }
    // Pregunto si la nueva nota es menor a la anterior
    if(nota < minNota) {
        // Si es asi, encontre un nuevo minimo
        minNota = nota;
    }

} while(confirm("Otra nota?"));

// Una vez que se cargaron las notas, sacamos los promedios
alert(`Hubo ${contadorDesaprobados} alumnos desaprobados y su nota promedio fue de ${(acumuladorDesaprobados / contadorDesaprobados).toFixed(1)}`);
alert(`Hubo ${contadorAprobados} alumnos aprobados y su nota promedio fue de ${(acumuladorAprobados / contadorAprobados).toFixed(1)}`);
alert(`Hubo ${contadorPromocionados} alumnos promocionados y su nota promedio fue de ${(acumuladorPromocionados / contadorPromocionados).toFixed(1)}`);

alert(`La nota minima del curso fue ${minNota}`);
alert(`La nota maxima del curso fue ${maxNota}`);