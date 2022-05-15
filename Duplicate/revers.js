/* const myArray = [2, 45, 546, 465, 346];

console.log( myArray.length);
console.log( myArray[3]);
console.log( myArray.push(555));
console.log( myArray.pop());
console.log( myArray);
myArray[0]= 88;
console.log( myArray); */

/* const myString = 'Hello, how are you?';

console.log(myString.length);
console.log(myString[3]);

for(const element of myString){
    console.log(element);
} */

const greetings = 'hello, how are you?';

function reverseString(text){
    let reverse = '';
    for(const letter of text){
        console.log(letter);
        reverse = letter+reverse;
    }
}
const reversed = reverseString(greetings);
console.log(reversed);