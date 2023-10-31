'use strict';

// prendere gli id dalla pagina html
const nome = document.getElementById('nome');
const cognome = document.getElementById('cognome');
const colorePreferito = document.getElementById('colorePreferito');
const password = document.getElementById('password');

// genera numeri casuali da 1 a 10
let min = 1;
let max = 10;
let n = Math.floor(Math.random() * (max - min + 1)) + min;

// mostrare nella conosle gli elementi presi
console.log(nome);
console.log(cognome);
console.log(colorePreferito);
console.log(password);

// tramite il prompt scrivere cio che viene richiesto
nome.innerHTML = nome.innerHTML + prompt('Scrivi il tuo nome');
cognome.innerHTML= cognome.innerHTML + prompt('Scrivi il tuo cognome');
colorePreferito.innerHTML = colorePreferito.innerHTML + prompt('Scrivi il tuo colore preferito');
// mostrare a schermo la password
password.innerHTML = 'la tua password:' + ' ' + nome.innerHTML + cognome.innerHTML + colorePreferito.innerHTML + n;