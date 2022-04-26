/* const numbers = [1, 2, 3, 4];
let sum = 0;
for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;
    // console.log(sum);
}
console.log(sum); */

function arraySum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;
    }
    return sum;
}
const sum = arraySum([1, 2, 3, 4]);
console.log(sum);