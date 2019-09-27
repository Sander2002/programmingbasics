// function factorial(num) {
//     let total = 1;
//     for (let i = 1; i <= num; i++) {
//         total *= i;
//     }
//     return total;
// }
// console.log(factorial(5));
 

// function animalSound(animal) {
//     if (animal == "hond") {
//         alert("Woef");        
//     } else if(animal == "schaap"){
//         alert("Méhh");
//     }else if(animal == "kat"){
//         alert("Miauw");
//     }else if(animal == "koe"){
//         alert("Boeehh");
//     } else if(animal == "varken"){
//         alert("Knorr");
//     }else if(animal == "vis"){
//         alert("Blub");
//     } else {
//         alert("Dit dier ken ik niet");
//     }
// }
// function writeASound(callback){
//     var animal = prompt("Vul een dier in");
//     callback(animal);
// }
// writeASound(animalSound);

//Huiswerk

function fibonacci(num) {
    let a = 1;
    let b = 1;
    let c;
    console.log(a);
    console.log(b);
    for (let i = 1; i <= num; i++) {
        c = a + b;
        console.log(c); 
        a = b;
        b = c;
    }
}
fibonacci(7);


function countdown(year){
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
    console.log(`Happy ${year}`);
}
countdown(2019);

//hoisting
console.log(substract(4,2));
function substract(number1, number2) {
    let total = number1 - number2;
    return total;    
}

//Zoals je kan zien in de console werkt de onderstaande niet vanwege de manier waarop hoisting werkt.
console.log(substract2(4.2));
var substract2 = function(number1, number2){
    let total = number1 - number2;
    return total;
}

