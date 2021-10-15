
const alumnos = [
    {
      nombre: 'Juan',
      carrera: 'Biología',
      nota: 16
    },
    {
      nombre: 'Jose',
      carrera: 'Enfermero',
      nota: 10
    },
      {
      nombre: 'Luis',
      carrera: 'Policía',
      nota: 07
    }
    ,
      {
      nombre: 'Maria',
      carrera: 'Secretariado',
      nota: 10
    },
    {
      nombre: 'Hugo',
      carrera: 'Enfermero',
      nota: 15
    },
      {
      nombre: 'Rosa',
      carrera: 'Enfermero',
      nota: 12
    }
    ,
      {
      nombre: 'Luisa',
      carrera: 'Biología',
      nota: 18
    }
  ]

/*
1) Crear una función que recorrar el arreglo alumnos e indique cuantos están aprobados,
cuantos están desaprobandos teniendo en cuenta que la nota mínima aprobatoria es 13.
Saca el promedio de las notas aprobadas, promedio de notas desaprobadas y el promedio total de notas.
Indicar el nombre y la carrera en un console.log de los que su indice sea multiplo de 2 ejemplo: 
"Mi nombre es Juan y mi carrera es Biología".
*/
let contAprobados = 0;
let contDesaprobados = 0;
let sumaAprobados = 0;
let sumaDesaprobados = 0;
let sumaTotal = 0;
let promAprobados = 0;
let promDesaprobados = 0;
let promTotal = 0;

alumnos.forEach( (a,index) =>{
    const { nombre, carrera, nota } = a;
    //(nota>=13) ? contAprobados++ : contDesaprobados++;
    if(nota>=13){
        contAprobados++;
        sumaAprobados+=nota;
    }else{
        contDesaprobados++;
        sumaDesaprobados+=nota;
    }

    sumaTotal+=nota;

    if(index % 2 == 0){
        console.log('Mi nombre es ',nombre ,' y mi carrera es ',carrera );
    }
});

promAprobados = Math.round(sumaAprobados/contAprobados);
promDesaprobados = Math.round(sumaDesaprobados/contDesaprobados);
promTotal = Math.round(sumaTotal/alumnos.length);

console.log('Alumnos aprobados: ', contAprobados);
console.log('Alumnos desaprobados: ', contDesaprobados);
console.log('Promedio de aprobados: ',promAprobados);
console.log('Promedio de desaprobados: ',promDesaprobados);
console.log('Promedio de todos los alumnos: ',promTotal);

/*
2) Crear una función que filtre en un nuevo arreglo a los alumnos que tengan de nota menor a 13.
*/

const result2 = alumnos.filter( a => a.nota<13 );
console.log(result2);

/*
3) Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los
 alumnos y luego la divida entre 2 para devolver la nueva nota de los alumnos.
*/

const result3= alumnos.map( a => (a.nota*3)/2 );
console.log(result3);

