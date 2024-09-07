//Desestructuración de Objetos
//Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 55,
    clave: 'Ironman'
}

const {nombre, edad, clave} = persona;

console.log(nombre, edad, clave);

const Contete = ({clave, nombre, edad, rango = 'Capitan'}) => {

    /* console.log(nombre, edad, rango); */

    return {
        nombreClave:clave,
        anios: edad,
        latlg: {
            lat: 14.5555,
            lng: 55.5555
        }
    }
}

const {nombreClave, anios, latlg } = Contete(persona)
const {lat, lng} = latlg

console.log(nombreClave, anios);
console.log(lat, lng);