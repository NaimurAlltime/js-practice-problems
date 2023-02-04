// find the min number with condition
let num1 = 20;
let num2 = 34;
let num3 = 14;

if(num1 < num2 && num2 < num3){
    console.log("Num1 is small");
}
else if(num2 < num1 && num2 < num3){
    console.log("Num2 is small");
}
else{
    console.log("Num3 is small");
}

console.log('--------------');

// find min number with math min function 
const minNumber = Math.min(23, 22, 12, 89, 199, 277);
console.log(minNumber);

console.log('-------------');

// find max number with function 
function minNumber1(num1, num2, num3){
    const min = Math.min(num1, num2, num3);
    return min;
}

const myMinNumber = minNumber1(20, 277, 98);
console.log(myMinNumber);