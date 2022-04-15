var computer = {
    price: 70000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel 15 3000'
}
// console.log(computer);
console.log(computer.processor);
// get object properties
var computerPrice = computer.price;
console.log(computerPrice);


// set a object property value
computer.price = 60000;
console.log(computer);

// different ways to set a value of an object property

computer.price = 50000;
computer['price'] = 45000;
var priceProperty = 'price';
computer[priceProperty] = 40000;

console.log(computer);


