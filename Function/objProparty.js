var computer = {
    price: 29000,
    storage: '156gb',
    processor: 'intel i5'
}
// console.log(computer);
// console.log(computer.processor);
// var computerPrice = computer.price;

//set a object property value
computer.price = 22000;

// console.log(computerPrice);
// console.log(computer);


//different ways to set a value of an object property

computer["price"] = 23000;

console.log(computer);