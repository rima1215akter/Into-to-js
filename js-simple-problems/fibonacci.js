
/* // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
3rd = 2nd + 1st
4th = 3rd +2nd
5th = 4th + 3rd
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th */

/* let fibo = [0,1]
for(let i=2; i<=10; i++){
    // nth = (n-1)th + (n-2)th
    // ith = (i-1)th + (i-2)th 
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); */

function fibonacciSeries(number){
    // console.log(typeof number);
    if(typeof number!= 'number'){
        return 'Please give a number'
    }
    else if(number<2){
        return 'Please enter a positive number'
    }
    let fibo = [0,1]
    for(let i=2; i<=number; i++){
    // nth = (n-1)th + (n-2)th
    // ith = (i-1)th + (i-2)th 
    fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

// const fiboSeries = fibonacciSeries(12);
// const fiboSeries = fibonacciSeries(1);
// const fiboSeries = fibonacciSeries(0);
// const fiboSeries = fibonacciSeries('sghh');
const fiboSeries = fibonacciSeries([-1]);
console.log(fiboSeries);