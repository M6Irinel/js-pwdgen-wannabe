// prendiamo il dom salvandola nella variabile constante
const passwordDom = document.getElementById('password');

// chiediamo il nome tramite prompt con la nostra domanda
const namePerson = prompt("Qual'è il tuo nome?");
// chiediamo il cognome tramite prompt
const lastNamePerson = prompt("Adesso scrivi, qual'è il tuo cognome?");
// chiediamo il colore tramite prompt
const colorPerson = prompt("E in fine il tuo colore preferito?");

// creiamo un generatore di numeri che inizi da 0 fino a 100
const generatorNumberRandom = Math.random() * 100;
// salviamo il numero creato dal generatore in una variabile con numero intero
const numberRandom = Math.round(generatorNumberRandom);

// mandiamo a schermo una concatenazione di variabili
passwordDom.innerHTML +=  namePerson + lastNamePerson + colorPerson + numberRandom;