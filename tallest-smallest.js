const studentsResults = [12, 43, 53, 14, 94, 23, 74, 14]

function getMax(numbers){
    let max = studentsResults[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(studentsResults);
console.log(max);


// smallest

function getMin(numbers){
    let min = studentsResults[0];
    for(const num of numbers){
        if (num < min){
            min = num;
        }
    } 
    return min;
}

const min = getMin(studentsResults);
console.log(min);