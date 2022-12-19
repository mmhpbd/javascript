function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}


const array = [-44, -23, -34, -5, -55, -48, -78, -98];
const largestValue = largestElement(array);
console.log(largestValue);
