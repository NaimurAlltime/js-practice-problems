function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        let element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const myNumbers = [23, 2341, 321, 233, 999];
const heights = maxInArray(myNumbers);
console.log("Heghts Number is: ", heights);