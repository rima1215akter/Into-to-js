const phones = [
    {name: 'samsung s5', price:4500, camera: 8, Storage:32},
    {name: 'walton m32', price:1500, camera: 8, Storage:32},
    {name: 'shaomi m3', price:10000, camera: 8, Storage:64},
    {name: 'vivo v21', price:12000, camera: 8, Storage:32},
    {name: 'Knokia n95', price:8000, camera: 8, Storage:64},
    {name: 'htc h81', price:25000, camera: 8, Storage:8}
];
 
let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);