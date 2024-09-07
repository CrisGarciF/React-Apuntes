//Funciones

const saludar = function (nombre) {
    return `Hola, ${nombre}`
}


const saludar2 =  (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 =  (nombre) =>  `Hola, ${nombre}`


console.log(saludar('ludf'));
console.log(saludar2('vegeta'));
console.log(saludar3('bebe'));

const getUSer = () =>{
    return {
        uid: 'Abc123',
        username: 'El_toro'
    }
}

console.log(getUSer());

//Tarea
//3. Pruebas
const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC123',
        username: nombre
    }
)


const usuarioActivo = getUsuarioActivo('fernando')

console.log(usuarioActivo);
