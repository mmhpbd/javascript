/* const business = 512;
const minister = 452; */

// For smaller

/*if(business>minister){
    console.log('Minister is Smaller.')
}
else{
    console.log('Business is Smaller')
} */

//For Smallest

/* function findLargest(first , second){
    if(first>second){
        return second;
    }
    else{
        return first;
    }
}
const small = findLargest(business , minister);
console.log('Smallest is',small); */

// For Thee value compare

const business = 512;
const minister = 452;
const army = 420;

// For Bigger in 3 value

/* if(business > army && minister > army){
    console.log('Army is Smaller')
}
else if(minister > business){
    console.log('Minister is Smaller.')
}
else{
    console.log('Business is Smaller')
} */


// For Largest in 3 value

function findLargest(first , second , third){
    if(first < second && first < third){
        return first;
    }
    else if(second > third){
        return second;
    }
    else{
        return third;
    }
}

const smallest = findLargest(business , minister , army);
console.log('Smallest is', smallest);