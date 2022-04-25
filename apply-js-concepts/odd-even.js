// const number = 4;
// const reminder = number % 2;
// console.log(reminder == 0);
// console.log(number %2 == 0);

// is even number
function isEven(number){
    if(number %2 == 0){
        return true;
    }
    return false;
}

const myNumber = 235;
const isMyNumberEven = isEven(myNumber);
console.log(isMyNumberEven);

const herNumber = 242;
const isHerNumberEven = isEven(herNumber);
console.log(isHerNumberEven);


// is odd function

function isOdd(number){
    if(number % 2 !=0){
        return true;
    }
    return false;

}

const isMyNumberOdd = isOdd(myNumber);
console.log(isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log(isHerNumberOdd);