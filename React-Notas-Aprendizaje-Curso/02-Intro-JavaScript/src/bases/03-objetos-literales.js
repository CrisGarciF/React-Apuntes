//Objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 55,
    direccion: {
        cuidad: 'New York',
        zip: 5555555,
        lat: 14.3232,
        lng: 34.89425621
    }
}

/* console.table({ persona }); */

console.log(persona);

const persona2 = { ...persona }
persona2.nombre = 'Peter'

console.log(persona2);
