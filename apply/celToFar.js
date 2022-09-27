//celsius to fahrenheit

function celToFar(celValue){
    var fahValue = (celValue *1.8 + 32);
    return fahValue;
}
var myCelvalue = celToFar(55);
console.log('Fahrenheit Value is', myCelvalue);


//Fahrenheit to celsius

function farToCel(fahValue1){
    var celValue1 = (fahValue1 - 32);
    var celsiusVal = (celValue1 * 1.8);
    return celsiusVal;
}
var myfahvalue = farToCel(32);
console.log('Fahrenheit Value is', myfahvalue);