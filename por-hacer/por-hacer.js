const fs = require('fs');

let listado = [];

const guardarDb = () => {
    let data = JSON.stringify(listado);

    fs.writeFile('./db/db.json', data, (err) => {
        if (err)
            throw new Error('no se pudo grabar', err);

    })
}

const leerDb = () => {
    try {
        listado = require('../db/db.json');
    } catch (error) {
        listado = [];
        // console.log(error);
    }
}
const getDatos = () => {
    let d = '';
    try {
        return d = require('../db/db.json');
    } catch (error) {
        d = [];
    }
}

const crear = (descripcion) => {
    leerDb();
    let cosas = {
        descripcion,
        completado: false
    }
    listado.push(cosas);

    guardarDb();

    return listado;

}

const actualizar = (descripcion, completado = true) => {
    leerDb();

    // let index = listado.findIndex(tarea => {
    //     tarea.descripcion === descripcion;
    // });
    // return descripcion;
    let index = listado.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listado[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getDatos,
    actualizar

}