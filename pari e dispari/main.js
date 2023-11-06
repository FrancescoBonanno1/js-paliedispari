//cominciamo da un prompt per chiederci quale numero sceglieremo
let numerogiocatore = prompt("Ciao! scegli un numero da 1 a 10");
console.log(numerogiocatore);

//ok, cosa succede se scegliamo un numero? dovrò sapere se è pari o dispari e se voglio, posso aggiungere se ho rispettato la condizione

if(numerogiocatore % 2 ==0){
    let pari = numerogiocatore;
    console.log(`hai scelto un numero pari ${pari}`);
}
else if(numerogiocatore>10){
alert("EHI! così non vale!");}

else if (numerogiocatore % 3 == 0) {
    let dispari = numerogiocatore;
    console.log(`hai scelto un numero dispari ${dispari}`);
}

let numeropc = Math.floor((Math.random() *10)+1)
console.log(numeropc);

if(numeropc % 2==0){
console.log(`il pc ha scelto un numero pari ${numeropc}`);}

else{
    console.log(`il pc ha scelto un numero dispari ${numeropc}`);
}

function somma(numerogiocatore, numeropc) {
    let risultato = (numerogiocatore + numeropc);
   console.log(risultato);
    return risultato;
}