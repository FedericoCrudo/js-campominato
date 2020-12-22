// Il computer deve generare 16 numeri casuali tra 1 e 100. fatto
// I numeri non possono essere duplicati fatto
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.


// dichiarazione array
numeriComputer = [];
numeriUtente = [];

//numeri computer senza ripetizioni
while (numeriComputer.length < 16){
  
   var numero = generaRandom(1,100);
 
   if (numeriComputer.includes(numero) == false){
  
    numeriComputer.push(numero);
  }
}

console.log(numeriComputer);
var sentinella = true;

// numeri utenti-controllo range-ripetizioni-presenza in array computer
while (numeriUtente.length < 84 && sentinella){ //sentinella true
    var number=parseInt(prompt("Inserire un numero da 1 a 100") );
    if(number>=1 && number <=100){
      if(numeriComputer.includes(number)==true){
        sentinella=false;
        alert("Hai totalizzato: "+numeriUtente.length+" punti");
      }
      else{
        if(numeriUtente.includes(number) == false){
          numeriUtente.push(number);
        }
        else{
          alert("Non inserire lo stesso valore")
        }
      }
    }
  else{
    alert("Si prega di inserire valori compresi tra 1 a 100");
  }
}
console.log(numeriUtente);
// FUNZIONE
// min e max compresi
function generaRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
