// chiedi all'utente nome, cognome, colore preferito e genera una password con quelle informazioni e 21 alla fine

// chiedo all'utente il nome
const nome = prompt("Qual è il tuo nome?");

// chiedo all'utente il cognome
const cognome = prompt("Qual è il tuo cognome?");

// chiedo all'utente il colore preferito
const colore = prompt("Qual è il tuo colore preferito?");

// creo una variabile unica per i tre valori
const passwordGenarata = nome + cognome + colore + "21"

// scrivo in pagina la password generata
document.getElementById("password").innerHTML = `La password assegnata è ${passwordGenarata}`;