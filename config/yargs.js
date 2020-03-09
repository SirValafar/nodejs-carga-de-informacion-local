const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    alias: 'c',
    default: true
};


const argv = require('yargs')
        //.command('listar'       , 'Actualizar el estado completo de una tarea.' )
        .command('crear'        , 'Crear un elemento por hacer.',  { descripcion })
        .command('actualizar'   , 'Actualizar informacion.'     ,  { descripcion, completado})
        .command('eliminar'     , 'elimina un campo.'           ,  { descripcion })
        .help()
        .argv;

module.exports = {
    argv
}