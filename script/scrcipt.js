'use strict';

// prendere gli id dalla pagina html
const nome = document.getElementById('nome');
const cognome = document.getElementById('cognome');
const colorePreferito = document.getElementById('colorePreferito');
const password = document.getElementById('password');

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
password.innerHTML = 'la tua password:' + ' ' + nome.innerHTML + cognome.innerHTML + colorePreferito.innerHTML + '21';