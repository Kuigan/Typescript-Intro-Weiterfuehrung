console.log('Hallo Welt')

const trainer: string = 'Lucas'

// ohne :string[] hätten wir eine Liste, die wir
// niemals befüllen könnten
let trainerListe: string[] = ['Shamila']

// console.log(trainerListe)

// Elemnt an Array HINTEN anhängen
trainerListe.push('Lucas')

// console.log(trainerListe)

// Element an Array VORNE anhängen
trainerListe.unshift('Galina')

console.log(trainerListe)

trainerListe.push('Benni')
// trainerListe.push('1')

// Wir können keine Zahlen anfügen
// trainerListe.push(1)

console.log(trainerListe)

let letzteElement = trainerListe.pop()
let ersteElement = trainerListe.shift()

console.log(ersteElement, letzteElement)
console.log(trainerListe)

console.log('tsc -w app.ts')