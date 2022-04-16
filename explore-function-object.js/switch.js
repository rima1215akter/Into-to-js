var color = 'yellow';

if(color == 'blue'){
    console.log('color is blue');
}
else if(color == 'red'){
    console.log('color is red');
}
else if(color == 'green'){
    console.log('color is green');
}
else if(color == 'orange'){
    console.log('color is orange');
}
else if(color == 'yellow'){
    console.log('color is yellow');
}
else if(color == 'white'){
    console.log('color is white');
}
else if(color == 'mangenta'){
    console.log('color is mangenta');
}
else{
    console.log('color is black');
}

// same as
switch(color){
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'green':
    case 'yellow':
        console.log('color is green or yellow');
        break;
    case 'white':
        console.log('color is white');
        break;
    default:
        console.log('color is black');  
}