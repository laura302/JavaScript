const names = ["Frank", "Peter", "John", "Bruce"]

console.log(names);

function getNames(){
    return names;
}

console.log(getNames());

function asynGetNames(){
    setTimeout(() => {
        console.log('Ejecuta Funcion');
        return names;
    }, 3000);
}

console.log('Inicia petecion');
console.log(asynGetNames());
console.log('Termina peticion');