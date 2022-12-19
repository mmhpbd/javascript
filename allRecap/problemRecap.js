/* function largestElement(numbers){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}

 */
function largestElement(numbers){
    let min = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}

const numbers = [44, 23, 34, 55, 48, 78, 98];

const mini = largestElement(numbers);
console.log(mini);