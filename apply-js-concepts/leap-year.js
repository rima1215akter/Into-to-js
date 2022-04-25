function isLeapYear(year){
    if((year % 4 ==0) && (year % 100 != 0) || (year % 400 ==0)){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2100;
const isMyYearLeapYear = isLeapYear(myYear);
console.log(isMyYearLeapYear);

const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log(isYourYearLeapYear);