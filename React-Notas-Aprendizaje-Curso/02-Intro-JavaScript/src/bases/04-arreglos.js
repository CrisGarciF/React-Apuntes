//Arreglos en JS

/* const arreglo = new Array(100); */
/* arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4) */
const arreglo = [1,2,3,4]

let arreglo2 = [...arreglo, 5]

const Areglos3 = arreglo2.map(function(numero) {
    return numero * 2
})

console.log(arreglo);
console.log(arreglo2);
console.log(Areglos3);


