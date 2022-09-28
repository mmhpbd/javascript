/* const business = 512;
const minister = 452; */

// For Bigger

/* if(business<minister){
    console.log('Minister is the Bigger.' );
}
else{
    console.log('Business is the Bigger',)
}

//For Largest

/* function findLargest(first , second){
    if(first<second){
        return second;
    }
    else{
        return first;
    }
}
const large = findLargest(business , minister);
console.log('Largest is',large); */



// For Thee value compare

const business = 512;
const minister = 452;
const army = 420;

// For Bigger in 3 value

/* if(business > minister && business > army){
    console.log('Business is Bigger.')
}
else if(minister > business && minister > army){
    console.log('Minister is Bigger.')
}
else{
    console.log('Army is Bigger.')
}
 */

// For Largest in 3 value

function findLargest(first , second , third){
    if(first > second && first > third){
        return first;
    }
    else if(second > first && second > third){
        return second;
    }
    else{
        return third;
    }
}

const largest = findLargest(business , minister , army);
console.log('Largest is', largest);