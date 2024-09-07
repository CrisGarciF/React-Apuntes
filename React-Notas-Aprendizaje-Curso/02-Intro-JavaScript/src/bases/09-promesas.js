//PROMESAS

import { getHeroeByID } from "./08-imp-exp";

/* const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //tarea
        const heroes = getHeroeByID(2)
        resolve(heroes)
    }, 4000);
});

promesa.then( (heroes) => {
    console.log('Then de la promesa', heroes);
})
.catch(err => console.warn(err)) */


const getHeroeByIDAsync = (id) =>  {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //tarea
            const heroes = getHeroeByID(id)
            if(heroes){
                resolve(heroes)
            }else {
                reject("No se encontro el Heroe")
            }

        }, 4000);
    });
}


getHeroeByIDAsync(2)
    .then(console.log)
    .catch(console.warn)