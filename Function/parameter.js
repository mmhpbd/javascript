function bringSingara(taka){
    console.log('singra ante diyeci', taka);
    console.log('Mama Singara den.');
    var singraPrice = 10;
    var singraQunatity = taka / singraPrice;
    return singraQunatity;
}
var money = 250;
var singra = bringSingara(money);
console.log('ai nen singra', singra);
