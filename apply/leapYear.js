function isLeapYear(year){
    if (year%4 ==0){
        return true;
    }
    else{
        return false;
    }
}
const myYear = 2086;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year Leap Year', isMyYearLeapYear);