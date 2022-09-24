function inchTofee(inchs){
    var feet = inchs/12;
    return feet;
}

var myInches = 132;
var feet = inchTofee(myInches);
console.log('my inches in feet', feet);

// mile to km
function mileTokm(miles){
    var km = miles * 1.60934;
    return km;
}
var marathon = mileTokm(26.2);
console.log('marathon is km:', marathon);