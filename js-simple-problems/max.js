const business = 246;
const minister = 678;
const army = 799;
/*
// first approach
if(business>minister){
    console.log('business is bigger');
}
else{
    console.log('minister is bigger');
}
*/

/* // second approach
if(business>minister && business>army){
    console.log('Business is bigger');
}
else if(minister>business && minister>army){
    console.log('Minister is bigger');
}
else{
    console.log('army is bigger');
} */

/* // third approach
var max = Math.max(business, minister, army);
console.log('largest is:', max);
 */

/* // fourth approach(find larger number)
function findLargest(business, minister, army){
    if(business>minister && business>army){
        return business;
    }
    else if(minister>business && minister>army){
        return minister;
    }
    else{
        return army;
    }
}

const larger = findLargest(244, 948, 978);
console.log(larger);  */


// find the smallest number
function findSmallest(business, minister, army){
    if(business<minister && business<army){
        return business;
    }
    else if(minister<business && minister<army){
        return minister;
    }
    else{
        return army;
    }
}

const smallest = findSmallest(244, 948, 978);
console.log(smallest);