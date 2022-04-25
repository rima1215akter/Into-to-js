/*// inches to feet
var dadiInches = 144;
var feet = dadiInches/12;
console.log(feet);

function inchToFeet(inches){
    var feet = inches/12;
    return feet;
}

var myInches = 134;
var feet = inchToFeet(myInches);
console.log(feet);

// mile to km
function mileToKilometer(miles){
    var km = miles*1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log(marathon);
// celcius to farenheit
*/
function celciusToFarenheit(celcius){
    var farenheit = 9/5 * celcius + 32;
    return farenheit;
}

var myCelcius = 24;
var farenheit = celciusToFarenheit(myCelcius);
console.log(farenheit);

// farenheit to celcius
function farenheitToCelcius(farenheit){
    var celcius = 5/9*(farenheit-32);
    return celcius;
}

var myFarenheit = 122;
var celcius = farenheitToCelcius(myFarenheit);
console.log(celcius);

// grade calculation
function gradePoint(GPA){
    // var marks = 100
       if(GPA>=3.70 && GPA<=4.00){
            return('A'+ '+') ;
       } 
       else if(GPA>=3.00 && GPA<=3.69){
            return ('A' + '-');
       }
}

const MyPoint = gradePoint(3.00);
console.log(MyPoint);