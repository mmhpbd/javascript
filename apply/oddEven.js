// const number = 5;
// console.log(number%2);
// const num1 = 4;
// console.log(num1%2);

function isEven(number){
    if(number%2 ==0){
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);