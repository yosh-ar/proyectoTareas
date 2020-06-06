let yargs = require('./config/yargs').argv;

let { crear, getDatos, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = yargs._[0];

// console.log(yargs.descripcion);

switch (comando) {
    case 'crear':
        console.log(crear(yargs.descripcion));
        break;
    case 'actualizar':
        let actu = actualizar(yargs.descripcion, yargs.completado);
        console.log(actu);
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
    case 'eliminar':
        let borrado = borrar(yargs.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('opcion no valida');
}