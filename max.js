// find the max number with condition
let num1 = 20;
let num2 = 34;
let num3 = 14;

if(num1 > num2 && num2 > num3){
    console.log("Num1 is big");
}
else if(num2 > num1 && num2 > num3){
    console.log("Num2 is big");
}
else{
    console.log("Num3 is big");
}

console.log('--------------');

// find max number with math max function 
const maxNumber = Math.max(23, 22, 12, 89, 199, 277);
console.log(maxNumber);

console.log('-------------');

// find max number with function 
function maxNumber1(num1, num2, num3){
    const max = Math.max(num1, num2, num3);
    return max;
}

const myMaxNumber = maxNumber1(20, 772, 98);
console.log(myMaxNumber);