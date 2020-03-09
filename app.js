//const argv = require('yargs').argv;
const argv      = require ('./config/yargs').argv;
const porhacer  = require ('./por-hacer/por-hacer');
const colors = require('colors');

let commando = argv._[0];

switch(commando){

    case 'crear':
        //console.log('Crear por hacer');
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        let tareas = porhacer.listado();
        console.log(tareas);

        for (let i = 0; i < tareas.length; i++) {
            console.log('==========Por Hacer=========='.green);
            console.log(  tareas[i].descripcion);
            console.log(`Estado: `, tareas[i].completado);
            console.log('============================='.green);
        }
        console.log('mostrar todas las tareas por hacer');
    break;

    case 'actualizar':
        let resultado = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(resultado);
        console.log('Actualiza una tarea por hacer');
    break;

    case 'eliminar':
        console.log('sdfsd',argv.descripcion);
        let borrado = porhacer.borrar(argv.descripcion);
        console.log(borrado);
    break;


    default:
        console.log('Comando no es reconocido.');
}