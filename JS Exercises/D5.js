let exercise = 1
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser.
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log('Exercise:', exercise++)

const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}
//done/tested/OK

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log('Exercise:', exercise++)
// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
pets.sort()
console.log(pets)
//done/tested/OK

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log('Exercise:', exercise++)

for (let i = pets.length - 1; i >= 0; i--) {
  console.log(pets[i])
}
//done/tested/OK

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
https: console.log('Exercise:', exercise++)

// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// The shift() method of Array instances removes the first element from an array
//  and RETURNS THAT REMOVED ELEMENT.
// shift() rimuove il primo elemento e lo ritorna (!!!), e push() lo riaggiunge alla fine
pets.push(pets.shift())
console.log(pets)
//done/tested/OK

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log('Exercise:', exercise++)

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate =
    cars[i].brand.slice(0, 4).toUpperCase() + cars[i].brand.charCodeAt(0) + i // Ho poca fantasia, faccio scegliere a JS
}
console.log(cars)
//done/tested/OK

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log('Exercise:', exercise++)

for (let i = 0; i < cars.length; i++) {
  cars[i].year = Math.floor(Math.random() * 25) + 2000 // Qui faccio scegliere alla sorte
  cars[i].trims.pop()
}
console.log(cars)
//done/tested/OK

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log('Exercise:', exercise++)

const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims[0]
}
console.log(justTrims)
//done/tested/OK

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log('Exercise:', exercise++)
let color
for (let i = 0; i < cars.length; i++) {
  color = cars[i].color
  if (color[0].toLowerCase() === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
}
//done/tested/OK

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log('Exercise:', exercise++)

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0
let value
while (value !== 32) {
  value = numericArray[i]
  console.log(value)
  i++
}
//done/tested/OK

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log('Exercise:', exercise++)

const charactersArray = ['g', 'n', 'u', 'z', 'd']
const itaAlphabet = 'abcdefghilmnopqrstuvz'
let positions = []
let position
for (let i = 0; i < charactersArray.length; i++) {
  // VERSIONE VELOCE
  // position = itaAlphabet.indexOf(charactersArray[i]) + 1 // +1 per avere la posizione reale

  // VERSIONE CON SWITCH
  switch (charactersArray[i]) {
    case 'a':
      position = 1
      break
    case 'b':
      position = 2
      break
    case 'c':
      position = 3
      break
    case 'd':
      position = 4
      break
    case 'e':
      position = 5
      break
    case 'f':
      position = 6
      break
    case 'g':
      position = 7
      break
    case 'h':
      position = 8
      break
    case 'i':
      position = 9
      break
    case 'l':
      position = 10
      break
    case 'm':
      position = 11
      break
    case 'n':
      position = 12
      break
    case 'o':
      position = 13
      break
    case 'p':
      position = 14
      break
    case 'q':
      position = 15
      break
    case 'r':
      position = 16
      break
    case 's':
      position = 17
      break
    case 't':
      position = 18
      break
    case 'u':
      position = 19
      break
    case 'v':
      position = 20
      break
    case 'z':
      position = 21
      break
  }
  positions.push(position)
}

console.log(positions)
//done/tested/OK
