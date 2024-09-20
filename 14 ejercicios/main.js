// Ejercicio 1
function guessNumberGame(){
    let randomNumber = Math.floor(Math.random * 100) + 1
    let num = prompt("Estoy pensando en un numero del 1 al 100 ¿Cual es?: ")

    console.log(randomNumber)
    while (num != randomNumber){
        num = prompt("Error, intenta de nuevo: ")
    }

    alert("Correcto! Fellicidades, ganaste.")
}

// Ejercicio 2
let infoBooks = {
    moby_dick : {year:"18 de octubre de 1851", autor: "Herman Melville"},
    Orgullo_y_prejuicio: {year: "28 de enero de 1813", autor: "Jane Austen"}
}

function iterateInfoBooks(info){
    for (let i in info){
        console.log(i.replaceAll("_", " "))
        console.log("")
        for (let j in info[i]) console.log(`${j}: ${info[i][j]}`)
        console.log("")
    }
}

// iterateInfoBooks(infoBooks)

// Ejercicio 3
let people = [
    {nombre: "Luis", edad: 20 , ciudad: "Paris"},
    {nombre: "Pedro", edad: 40 , ciudad: "Madrid"}
]

function iteratePeople(group){
    for (let list of group){
        for (let v in list){
            console.log(list[v])
        }

        console.log()
    }
}

iteratePeople(people)

// Ejercicio 4
function randomChoice(list) {
  let i = Math.floor((Math.random() * 100) / (100 / list.length));
  return list[i];
}

let words = ["palabra", "paraguas", "manzana", "planta", "casa"];

function guessWordGame(randomWord) {
  let i = 12;
  let guess = "_ ".repeat(randomWord.length);

  alert(`Adivina la palabra ingresando una letra en cada intento.`);

  let text = `
    ${guess}            tienes ${i} intentos
    `;

  let pattern = "";
  do {
    let letter = prompt(text);

    if (letter.length > 1) {
      alert(`Tienes que ingresar solo una letra, intentalo de nuevo`);
    } else if (randomWord.includes(letter)) {
      alert("Correcto");
      i--;
      guess = guess.split(" ");

      for (let i in randomWord)
        randomWord[i] == letter ? guess.splice(i, 1, letter) : null;

      guess = guess.join(" ");
    } else {
      alert("Incorrecto");
      i--;
    }

    text = `
        ${guess}            tienes ${i} intentos
        `;
  } while (i > 0 && randomWord != guess.replaceAll(" ", ""));

  if (randomWord != guess.replaceAll(" ", "")) {
    alert("Perdiste, que pena");
  } else {
    alert("Felicidades, ganaste");
  }
}

guessWordGame(randomChoice(words));

// Ejercicio 5
class Persona{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.name}, y tengo ${this.age} años`)
    }
}

let pepe = new Persona("Pepe", 30)

// pepe.saludar()

// Ejercicio 6
class Estudiante extends Persona{
    constructor(name,age,curso) {
        super(name,age)
        this.curso = curso
    }

    presentar(){
        this.saludar()
        console.log(`Estoy en el curso ${this.curso}`)

    }
}

// Ejercicio 7
function copyReplace(sentece, search, replace){

    // return sentece.replaceAll(search,replace)

    let text = ""

    for (let word of sentece.split(" ")) text += word == search ? replace + " " : word + " "

    return text
}

// Ejercicio 8
let listPeople = [
    {nombre: "Luis", edad: 20 , ciudad: "Paris"},
    {nombre: "Pedro", edad: 40 , ciudad: "Madrid"},
    {nombre: "Julian", edad: 15 , ciudad: "Madrid"},
    {nombre: "Alex", edad: 12 , ciudad: "Madrid"},
]
function ageFilter(list){
    return list.filter(obj =>{
        return obj.edad > 18
    })
    
}

ageFilter(listPeople)

// Ejercicio 9
let array9 = [{nombre: "Luis", edad: 33, hobbies: ["videojuegos,", "musica", "cine"]}, {nombre: "Juanito", edad: 30, hobbies: []}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]

for (let list of array9){
    for (let i in list){
        let v = list[i]
        if (Array.isArray(v)) v.forEach( h => console.log(h))
        else console.log(v)
    }

    console.log()
}

// Ejercicio 10
array9.push({nombre: "Maria", edad: 25})

// Ejercicio 11
for (let i in array9){
    if (array9[i].nombre == "Pedro") array9.splice(i,1)
}

// Ejercicio 12
for (let i of array9){
    if (i.nombre == "Juanito") i.hobbies.push("Diseñar")
}

// Ejercicio 13
class Inventario{
    constructor(){
        this.productos = []
    }

    agregarProducto(nombre, precio , cantidad){
        this.productos.splice(0,0,{nombre, precio , cantidad})
    }

    calcularValorTotal(){
        for (let producto of this.productos) {

            console.log(producto.cantidad * producto.precio)
        }
    }

    listarProductos(){
        for (let obj of this.productos) {
            for (let i in obj){

                let producto = obj[i]
                console.log(`${i}: ${obj[i]}`)
            }
        }
    }
}

let milInventario = new Inventario()

milInventario.agregarProducto("Paraguas",50,5)

milInventario.agregarProducto("Telefono",700,10)

milInventario.agregarProducto("Armario",1000,3)

milInventario.listarProductos()

milInventario.calcularValorTotal()
