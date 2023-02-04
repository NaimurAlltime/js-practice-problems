function maxInArray(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        let element = numbers[index];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}

const myNumbers = [23, 2341, 321, 12, 233, 999];
const minInArray = maxInArray(myNumbers);
console.log("Lowest Number is: ", minInArray);