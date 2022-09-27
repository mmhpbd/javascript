function gradeSystem (subMarks){
    if(goldenA>=90){
        return goldenA;
    }
    else{
        return Fail;
    }
}
const mySubMarks = gradeSystem(95);
console.log('My result is',mySubMarks);


