//Operador Condicional Ternario

const active = true

/* let mensaje = ''

if(!active){
    mensaje = 'Activo'
}else {
    mensaje = 'Inactivo'
}
console.log(mensaje);
 */

/* const mensaje = ( active ) ? 'Activo' : 'Inactivo' */

const mensaje = !active && 'Activo'

console.log(mensaje);