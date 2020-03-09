const fs = require('fs')

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`DB/data.json`, data, (err) => 
    {
        console.log(err);
        //if (err) throw new Error('no se envcontro');
    });
}


const cargarDB = () => {

    try{

        listadoPorHacer = require('../DB/data.json');
    } catch {
    listadoPorHacer = [];
    }
}

const listado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {

    cargarDB();

    let porhacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porhacer );
    console.log(porhacer);
    guardarDB();

return porhacer;
    
}

const actualizar = (descrpcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descrpcion;
    });

    if(index >= 0){
        listadoPorHacer[index].completado = true;
        guardarDB();
        return true;
    }
    else
    return false;
}

const borrar = (descripcion) =>{
    cargarDB();

    let nuevolistado =listadoPorHacer.filter( tarea => {
        return tarea.descripcion != descripcion
    });

    if(listadoPorHacer.length === nuevolistado.length){
        return false;
    } else {
        listadoPorHacer = nuevolistado;
        guardarDB();
        return true;

    }
}

module.exports = {
    crear,
    listado, 
    actualizar,
    borrar
}