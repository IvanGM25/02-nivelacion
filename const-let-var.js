//--var---
/*var nombre = 'Ivan';

if (true) {
    var nombre = 'Diego'
}

console.log(nombre);// * nombre == Diego*/

//--let---
/*let nombre = 'Ivan';

if (true) {
    let nombre = 'Diego'
}

console.log(nombre);// * nombre == Ivan*/

//--const---
const nombre = 'Ivan';

if (true) {
    const nombre = 'Diego' 
    nombre = 'Juan' // ! Error
}

console.log(nombre);// * nombre == Ivan