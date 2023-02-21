const obj = {
    nombre: "Juan David",
    apellido: "Forero",
    edad: "27",
    Desarrollador: true
}


const obtredad = obj.edad
console.log(obtredad)

let array = [obj];

console.log(array)
console.log("----------------------------------------")
const objamigos = [{
    nombre: "Juan Carlos",
    apellido: "Herrera",
    edad: "28",
    Desarrollador: true},{
    nombre: "David",
    apellido: "Coontreras",
    edad: "30",
    Desarrollador: false}
]

const nueva = objamigos.sort((a,b) => b.edad-a.edad)

console.log(nueva)