 var first = 25;
 var second = 50;
 console.log(first , second);


 //first approach
/*  var tamp = first;
 first = second;
 second = tamp;
 console.log(first , second); */

 //distriburing
 [first , second] = [second , first];
console.log(first , second);