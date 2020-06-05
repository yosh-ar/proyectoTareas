let yargs = require('./config/yargs').argv;

let { crear, getDatos } = require('./por-hacer/por-hacer');

let comando = yargs._[0];

// console.log(yargs.descripcion);

switch (comando) {
    case 'crear':
        console.log(crear(yargs.descripcion));
        break;
    case 'actualizar':
        console.log('estas en actualizar tareas');
        break;
    case 'listar':
        let listado = getDatos();
        if (listado) {
            listado.forEach(tarea => {
                console.log(`Tarea: ${tarea.descripcion} estado: ${tarea.completado}`);
            });
        } else {
            console.log('no existe informacion en la BD');
        }
        break;
    default:
        console.log('opcion no valida');
}