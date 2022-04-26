/*
const myNumber = 4;
const output = Math.abs(myNumber);
console.log(output);
*/

const myNumber = 22.5999;
// const output = Math.ceil(myNumber);
//  const output = Math.floor(myNumber);
//  const output = Math.round(myNumber);
const output = Math.random(myNumber) * 10;
const rounded = Math.ceil(output) ;

console.log(rounded);

for (let i=0; i<=30; i++){
    const output = Math.random(myNumber) * 6;
    const rounded = Math.floor(output) ;

    console.log(rounded);

}

