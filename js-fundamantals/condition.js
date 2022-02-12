var iphonePrice = 70000;
var myBudget = 109500;
if(iphonePrice < myBudget){
    console.log('Iphone');
}

if(myBudget > iphonePrice){
    console.log('mybudget');
}
else{
    console.log('iphonePrice');
}
// multiple condition
var gotJob = true;
var moneySaved = 5000;
var hasFlat = false;
var hasHouse = true;

if(gotJob == true && moneySaved > 2000){
    console.log('work done');   
}
else{
    console.log('work not done')
}
if((gotJob == true && moneySaved > 2000) || hasHouse == false){
    console.log('work done');   
}
else{
    console.log('work not done')
}
// nested condition
var biscuitPrice = 50;
var potatoPrice = 20;
var chokolatePrice = 10;
var myBudget = 30;

if(myBudget < potatoPrice){
    console.log('kahbo');
}
else if(chokolatePrice < biscuitPrice){
    console.log('khabo na')
}
else if(chokolatePrice > biscuitPrice){
    console.log('khabo ji')
}
else{
    console.log('khabo he ')
}


if(myBudget < biscuitPrice){
    if(chokolatePrice > biscuitPrice){
        console.log('khabo ji')
    }
    else{
        console.log('khabo he ')
    } 
}


