function bringSingra(taka){
    console.log(taka);
    var singraPrice = 10;
    var singraQuantity = taka/singraPrice;
    return singraQuantity;

}
// bringSingra(100);
var money = 80;
var singra = bringSingra(money);
console.log(singra);