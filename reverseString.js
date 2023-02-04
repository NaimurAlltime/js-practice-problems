function reverseString(text){
    let str = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        str += element;
    }
    return str;
}

const myString = 'I am good boy';
const reversed = reverseString(myString);
console.log(reversed);


// option:2 
function reverseString1(string) {
    // Step 1. Use the split() method to return a new array
    let splitString = string.split("");
 
    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse();
 
    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join("");
    
    //Step 4. Return the reversed string
    return joinArray;
}
const myText = "Amar sonar bangla";
const reverseText = reverseString1(myText);
console.log(reverseText);