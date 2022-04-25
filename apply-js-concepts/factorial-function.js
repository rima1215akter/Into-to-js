function getFactorial(number){
    let factorial = 1;
    for(let i=1; i<=number; i++){
        factorial = factorial *i;

    }
    return factorial;
}

var firstFactorial = getFactorial(5);
console.log(firstFactorial);

// using while loop
function getFactorial(number){
    let factorial = 1;
    let i=1;
    while (i<=number){
        factorial = factorial *i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial2(4);
console.log(myFactorial);

// using for loop for reverse
function getFactorial2(number){
    let factorial = 1;
    for(let i = Number; i>=1; i--){
        factorial = factorial*1;
    }
    return factorial;
}

const herFactorial = getFactorial2(4);
console.log(herFactorial);

// decrement factorial
function getFactorial(number){
    let factorial = 1;
    let i = number;
    while (i>=1){
        factorial = factorial *i;
        i--;
    }
    return factorial;
}

const yourFactorial = getFactorial(4);
console.log(yourFactorial);