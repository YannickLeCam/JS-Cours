//Je suis la 
console.log("Hello JS !");//Et la 
let age = 27;

/**
 * Et mm sur plusieurs lignes
 */

//Je suis un number :
const klfsd = 15;
let dsqfs = 12.52;
let dsffsd= 46;

//Je suis un sting : 

const chausseurDeMarque = "Nike";
let prenom = "Yann";
var lessive = "Ariel";

//Je suis un boolean :

const isAdult = true;
let isCute = false;
var isDating = false;

//if ternaire :

isAdult ? console.log("Il est Adulte") : console.log("Il n'est pas Adulte ! ");
isCute ? console.log("Il est Cute") : console.log("Il n'est pas Cute ! ");

if (age >18 && age < 40){
    console.log("Il est majeur et a moins de 40 ans. Il a actuellement "+age+" ans");
}

//Table de multiplcation : 

for (let i = 1; i <= 10; i++) {
    console.log("3 x " + i +" = " + (i*3));
}

for (let i = 5; i > 0; i--) {
    console.log(`${i}...`);
}

function nomDeLaFonction(arg1 , arg2 , arg3) {
    return arg1 * arg2 + arg3;
}

console.log(nomDeLaFonction(1,2,3));

function getMult(num1,num2) {
    return num1*num2;
}
function getAdd(num1,num2) {
    return num1+num2;
}
function getDiv(num1,num2) {
    return num1/num2;
}
function getSub(num1,num2) {
    return num1-num2;
}

function getResult(num1 , operation , num2) {
    if (operation === "multiplie" || operation === "*" ) {
        return getMult(numl,num2);
    }else if (operation === "divise" || operation === "/" ){
        return getDiv(num1,num2);
    }else if (operation === "additionne" || operation === "+"){
        return getAdd(num1,num2);
    }else if (operation === "soustraie" || operation === "-" ){
        return getSub(num1,num2);
    }else {
        return "Nous ne prenons pas en compte ce calcul";
    }
}

console.log(getResult(5,"/",2));

const tab = [11,22,33,44,55,66,77,88,99];

console.log(tab.join("_|_"));

console.log(`l'élément 77 ${tab.includes(77) ? "est" : "n'est pas"} dans le tableau [${tab.join(", ")}]`);


const tabAssociatif = {};

tabAssociatif.prenom="Yann";
tabAssociatif.age=27;

console.log(tabAssociatif);
console.log(tabAssociatif.prenom);

let pikachu = {
    id: 25,
    name: "Pikachu",
    weight: 6.0,
    hpMax: 80,
    attacks: [
        {
            name:"Vive-Attaque",
            type:"Normal",
            damages:10,
        },
        {
            name:"Boule Elek",
            type:'Elek',
            damages:30,
        },
    ],
}

console.log(pikachu);

function listerAttaquesPokemon(pokemon) {
    console.log(`${pokemon.name} possède ${pokemon.attacks.length} attaques :`);

    pokemon.attacks.forEach(attack => {
        console.log(`${attack.name}         ${attack.damages}`);
    });
}

listerAttaquesPokemon(pikachu);