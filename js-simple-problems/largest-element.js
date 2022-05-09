/* // find largest Number with array
function largestElement(numbers){
    let largest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        if(element>largest){
            largest = element;
        }
    }
    return largest;
}

const oldest = largestElement([24, 45, 56, 75, 76]);
console.log(oldest); */

// find lowest number with array
function lowestElement(numbers){
    let lowest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        if(element<lowest){
            lowest = element;
        }
    }
    return lowest;
}

const oldest = lowestElement([24, 45, 56, 11, 75, 76]);
console.log(oldest);