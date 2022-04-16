var i = 0;
while (i < 10){
    console.log(i);
    if(i == 5){
        break;
    }
    i++;
}

for(var i = 0; i<12; i++){
    console.log(i);
    if(i == 6){
        break;
    }
}
var numbers = [11, 22, 33, 44, 35, 46, 66]
for(var i = 0; i<numbers.length; i++){
    var number = numbers[i];
    console.log(number);
    if(number > 40){
        break;
    }
}
var numbers = [11, 22, 33, 44, 35, 46, 66]
for(var i = 0; i<numbers.length; i++){
    var number = numbers[i];
    console.log(number);
    if(number > 20){
        continue;
    }
}


for(var i = 0; i<20; i++){
    console.log(i);
    if(i > 15){
        continue;
    }
}

