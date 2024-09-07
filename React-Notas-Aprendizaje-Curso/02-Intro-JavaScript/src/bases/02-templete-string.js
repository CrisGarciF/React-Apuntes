//Template String - Concatenación

const nombre = 'Cristian'
const apellido = 'Garcia'

const nombreCompleto = `${nombre} ${apellido} ${11 + 10}`

console.log(nombreCompleto);


function getSaludo (nombre){
    return 'Hola: ' + nombre
}

console.log(`Este es un texto: ${getSaludo( nombre ) }`);
