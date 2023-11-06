//cominciamo da un prompt per chiederci quale numero sceglieremo e se è pari o dispari
let scelta = prompt("ciao, scegli se puntare su un numero pari o dispari")
let numerogiocatore = prompt("adesso scegli un numero da 1 a 5");

console.log(`hai scelto ${scelta}, ed il numero: ${numerogiocatore}`)

//tocca al computer scegliere adesso
let min = 1;
let max = 5;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let numeropc = random(min, max);
console.log(`Il pc ha scelto ${numeropc}`);


let somma = numerogiocatore + numeropc;

if(somma % 2 == 0, scelta =("pari") ){
 console.log(`ti è andata bene, hai vinto, la somma è ${somma}`);
}
else if(somma % 3 == 0, scelta =("dispari")) {
    console.log(`ti è andata bene, hai vinto, la somma è ${somma}`)
}
else{
    console.log(`Ti è andata male amico, hai perso la scommessa.`)
}