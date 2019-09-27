let x;
let k = 1;
while (k <= 1000) {
    x = k;
    x %= 4;
    if (x == 0) {
        console.log(k, "is deelbaar door 3");
    } else {
        console.log(k, "is niet deelbaar door 3");
    }
    k++;
}



let a = 1;
let b = 1;
let c;
console.log(a);
console.log(b);
for (let i = 0; i <= 10; i++) {
    c = a + b;
    console.log(c); 
    a = b;
    b = c;   
}


let total = 0;
let array = [0,1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < array.length; i++) {
    total += array[i];
    
}
console.log(total);
