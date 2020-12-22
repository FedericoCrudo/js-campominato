// Il computer deve generare 16 numeri casuali tra 1 e 100. fatto
// I numeri non possono essere duplicati fatto
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.


// dichiarazione array
numeriComputer = [];
numeriUtente = [];
var   difficolta=parseInt(prompt("Inserisci difficolata(0=1-100||1=1-80||2=1-50"))
//livelli difficolta
switch (difficolta) {
  case 0:
    min=1;
    max=100;
   break;
  
  case 1:
    min=1;
    max=80;
    break;
  case 2:
      min=1;
      max=50;
      break;

  default:
  alert("Error");
}

//numeri computer senza ripetizioni
while (numeriComputer.length < 16){
  
   var numero = generaRandom();
 
   if (numeriComputer.includes(numero) == false){
  
    numeriComputer.push(numero);
  }
}

console.log(numeriComputer);
var sentinella = true;
var maxinput= max-16;
// numeri utenti-controllo range-ripetizioni-presenza in array computer
while (numeriUtente.length <maxinput  && sentinella){ //sentinella true
    var number=parseInt(prompt("Inserire un numero da 1 a 100") );
    if(number>=1 && number <=100){
      if(numeriComputer.includes(number)==true){
        sentinella=false;
        
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
var risultato=result(numeriUtente);



//FUNZIONI
function result(numeriUtente){
  if(numeriUtente.length==84){
    return "Hai vinto";
  }
  else{
    return"Hai perso, hai totalizzato: "+numeriUtente.length;
  }
}

console.log(numeriUtente);
console.log(risultato);

// min e max compresi
function generaRandom(){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
