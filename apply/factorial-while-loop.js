// function getFactorial(number){
//     let factorial = 1;
//     let i=1;
//     while(i<=number){
//         factorial= factorial*i;
//         i++;
//     }
//     return factorial;
// }
// let myfactorial = getFactorial(6);
// console.log('Value of my factorial', myfactorial);



// if value of i is come down....

// function getFactorial(number){
//     let factorial = 1;
//     let i = number;
//     while(i>=1){
//         factorial= factorial*i;
//         i--;
//     }
//     return factorial;
// }
// let myfactorial = getFactorial(6);
// console.log('Value of my factorial', myfactorial);



// for loop reverse

function getFactorial(number){
    let factorial = 1;
    for(let i= number; i>=1;i--){
        factorial = factorial*i;
    }
    return factorial;
}
let myfactorial = getFactorial(6);
console.log('Value of my factorial', myfactorial);