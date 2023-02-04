function reverseWord(str){
    const words = str.split(' ');
    console.log(words); //[ 'I', 'am', 'a', 'good', 'boy' ]
    let reversed = [];
    for(let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        // console.log(element);
        reversed.push(element);
    }
    const joinReverse = reversed.join(' ');
    return joinReverse;
}

const myString = "I am a good boy";
const result = reverseWord(myString);
console.log(result);