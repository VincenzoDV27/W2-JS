/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

const nome = "Mario";
const cognome = "Rossi";
console.log(`Ciao, mi chiamo ${nome} ${cognome}.`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

let a = 10;
let b = 3;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

const annoNascita = 2003;
const annoCorrente = 2026;
let etaOggi = annoCorrente - annoNascita;
console.log(`Oggi hai ${etaOggi} anni.`);
let eta10 = 10 + etaOggi;
console.log(`Tra 10 anni avrai ${eta10} anni.`);
let eta_5 = etaOggi - 5;
console.log(`5 anni fa avevi ${eta_5} anni.`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

let eta;
eta = 25;
const boolean = eta >= 18;
console.log(`Età: ${eta} - Maggiorenne: ${boolean}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

let stringa = "Pippo";
let numero = 5;
let booleano = false;
let nullo = null;
let indefinito; //const richiede immediatamente il valore, ma essendo undefined uso let

console.log(`stringa è di tipo: ${typeof stringa}`);
console.log(`numero è di tipo: ${typeof numero}`);
console.log(`booleano è di tipo: ${typeof booleano}`);

//in console esce object, noto "bug" che non è stato mai risolto.
console.log(`nullo è di tipo: ${typeof nullo}`);

console.log(`indefinito è di tipo: ${typeof indefinito}`);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

let num = 5;
let stringNum = "5";
console.log(num == stringNum); //controlla se il tipo di variabile O il valore è uguale quindi -> true
console.log(num === stringNum); //controlla se il tipo di variabile E il valore sono uguali quindi -> false

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

// 53, va a concatenare i due valori in quanto non trasforma il 5 in number e rimane string.
// 2, trasforma lo string 5 in number e fa effettivamente la differenza
// 2, true vale 1 e viene fatta l'addizione
// 20, trasforma le due string in number ed effettua la moltiplicazione

console.log("5" + 3);
console.log("5" - 3);
console.log(true + 1);
console.log("10" * "2");

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

let n;
n = 10;
let par_disp = n % 2; //prendo il resto con la variabile par_disp
let b_pd = par_disp === 0; //b_pd = boolean pari dispari
console.log(`n è pari: ${b_pd}`);

console.log(`n è divisibile per 3: ${n % 3 === 0}`); // stessa cosa, senza creare una variabile per prenderne il resto, faccio direttamente la verifica

console.log(`n è pari e divisibile per 3:  ${b_pd && n % 3 === 0}`); //vede se il numero è pari E se il numero è divisibile per 3 con l'operatore logico AND (&&)

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

const A1 = 5;
const B1 = 5;
const C1 = 5;

let p = A1 + B1 + C1; //perimetro
const B_EQUI = A1 === B1 && B1 === C1; //equilatero

const B_ISO = A1 === B1 || B1 === C1 || A1 === C1; //isoscele

const B_SCA = A1 !== B1 && B1 !== C1 && A1 !== C1; //scaleno

const TIPOTRIANGOLO = B_EQUI //operatore condizionale ternario (come se fosse un if/else if/else) va a verificare quale tra questi ha valore true
  ? "equilatero"
  : B_ISO
    ? "isoscele"
    : B_SCA
      ? "scaleno"
      : "error";

console.log(`Triangolo ${TIPOTRIANGOLO}, perimetro ${p}`);

/*
if (A1 === b1 && B1 === C1) {
  console.log(`Triangolo equilatero, perimetro ${p}`);
} else if (A1 === B1 || B1 === C1 || A1 === C1) {
  console.log(`Triangolo isoscele, perimetro ${p}`);
} else if (A1 !== B1 && B1 !== C1 && A1 !== C1) {
  {
    console.log(`Triangolo scaleno, perimetro ${p}`);
  }
} else {
  console.log(`Errore`);
}*/
