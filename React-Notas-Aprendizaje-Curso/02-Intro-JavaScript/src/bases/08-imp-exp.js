//Import, export y funciones comunes de arreglos - Múltiples exportaciones/exportaciones por defecto
/* import {heroes} from '../data/heroes' */
/* import {heroes} from '../data/heroes' */
import { heroes } from "../data/heroes";

export const getHeroeByID = (id) => {
    return heroes.find((e) => e.id === id )
}

console.log(getHeroeByID(2) );

export const getHeroesByOwner = (owner) => {
    return heroes.filter((e) => e.owner === owner )
}

console.log(getHeroesByOwner('Marvel'));