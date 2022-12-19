// fibonacci dara

/* const fibo = [0 , 1];
for(let i = 2; i<=10; i++){
    
    // nth= (n-1)th + (n-2)th;

    fibo[i]= fibo[i-1] + fibo[i-2];
}
console.log(fibo);


//fibonacci with function
function fibonacciseries(num){
    const fibo = [0 , 1];
    for(let i = 2; i<=num; i++){

        fibo[i]= fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboseries = fibonacciseries(13);
console.log(fiboseries); */

//For exject fibonacci series used if else

function fibonacciseries(num){
    if(typeof num != 'number'){
        return 'please give me a number';
    }
    if(num < 2){
        return 'please give me a postive number above than 1';
    }
    const fibo = [0 , 1];
    for(let i = 2; i<=num; i++){

        fibo[i]= fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboseries = fibonacciseries(13);
console.log(fiboseries);