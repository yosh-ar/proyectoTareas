let argv = require('yargs').command('crear', 'crea el listado de tareas', {
        descripcion: {
            alias: 'd',
            demand: false
        }
    }).command('actualizar', 'actualiza las tareas', {
        descripcion: {
            alias: 'd'
        },
        completado: {
            demand: true,
            alias: 'c'
        }
    }).command('eliminar', 'actualiza las tareas', {
        descripcion: {
            alias: 'd'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}