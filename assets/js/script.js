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
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

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

const eta = 25;
const boolean = eta >= 18;
console.log(`Età: ${eta} - Maggiorennte: ${boolean}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

const stringa = "Pippo";
const numero = 5;
const booleano = false;
const nullo = null;
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

const num = 5;
const stringNum = "5";
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

// 53, va a contatenare i due valori in quanto non trasforma il 5 in number e rimane string.
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

const n = 10;
const par_disp = n % 2; //prendo il resto con la variabile par_disp
const b_pd = par_disp === 0; //b_pd = boolean pari dispari
console.log(`n è pari: ${b_pd}`);

const b_div3 = n % 3 === 0; // stessa cosa, senza creare una variabile per prenderne il resto, faccio direttamente la verifica dalla variabile boolean
console.log(`n è divisibile per 3: ${b_div3}`);

console.log(`n è pari e divisibile per 3:  ${b_pd && b_div3}`); //vede se il numero è pari E se il numero è divisibile per 3 con l'operatore logico AND (&&)

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

const a1 = 5;
const b1 = 7;
const c1 = 4;

const p = a1 + b1 + c1;

const b_equi = a1 === b1 && b1 === c1; //equilatero
console.log(b_equi);

const b_iso = a1 === b1 || b1 === c1 || a1 === c1; //isoscele
console.log(b_iso);

const b_sca = a1 !== b1 && b1 !== c1 && a1 !== c1; //scaleno
console.log(b_sca);

const tipoTriangolo = b_equi //operatore condizionale ternario (come se fosse un if/else if/else) va a verificare quale tra questi ha valore true
  ? "equilatero"
  : b_iso
    ? "isoscele"
    : b_sca
      ? "scaleno"
      : "error";

console.log(`Triangolo ${tipoTriangolo} perimetro ${p}`);
