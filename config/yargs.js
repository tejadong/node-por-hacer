const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('listar', 'Lista todas las tareas por hacer', {})
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Genera un archivo con la tabla de multiplicar con límite', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea de listado', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}