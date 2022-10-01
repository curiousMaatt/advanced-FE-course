
function decimalFilter(...numbers) {
    return numbers.filter((item) => Number.isInteger(item));
}

// 1, min - inclusive, max - exclusive
function getRandomArray(length, min, max) {
    let randomArray = [];

    for( let i = 0; i < length; i++ ) {
        let randomValue = Math.floor((Math.random() * (max-min)) + min);
        randomArray.push(randomValue);
    }

    return randomArray;
}

// 2, find MODE element
function getMode(...num) {
    let newArr = decimalFilter(...num);

    const quantity = {};
    let result = [];
    let max = 0;
    
    newArr.forEach(num => {
        if (!quantity[num]) quantity[num] = 0;
        quantity[num]++;
    });

    for(let num in quantity) {
        let value = quantity[num];
        
        if(value > max){
            result = num;
            max = value;
        }
    }

    return result;
}

// 3, find the AVERAGE value
function getAverage(...numbers) {
    let arr = decimalFilter(...numbers);

    let sum = 0;

    arr.forEach((item) => {
        sum += item;
    });

    return sum/arr.length;
}

// 4, find the MEDIAN value
function getMedian(...numbers){
    let arr = decimalFilter(...numbers);
    arr.sort((a, b) => a-b);
    
    const center = Math.floor(arr.length/2);
    let centerVal = arr[center];
    let beforeCenter = arr[center-1];

    if(arr.length % 2) {
        return arr[center];
    }

    return (centerVal + beforeCenter) / 2;
}

// 5, filter even and returns odd numbers 
function filterEvenNumbers(...numbers){
    return arr = numbers.filter((item) => item % 2 != 0);
}

// 6, count positive numbers
function countPositiveNumbers(...numbers) {
    return arr = numbers.filter((item) => item > 0);
}

// 7, creates arr with numbers which divides by 5
function getDividedByFive(...numbers) {
    return arr = numbers.filter((item) => item % 5 == 0);
}

// 8, replace the swear words
const SWEAR1 = "fuck";
const SWEAR2 = "shit";
const swearArr = ["fuck", "shit"]; // for second way
const HIDDEN = "****";

function replaceBadWords(string) {
    let arr = string.split(' ');

    // one way
    // for(let i in arr) {
    //     if(arr[i].includes(SWEAR1)){
    //         let replacedSwear = arr[i].replace(SWEAR1, HIDDEN);
    //         arr[i] = replacedSwear;
    //     }
    //     else if (arr[i].includes(SWEAR2)){
    //         let replacedSwear = arr[i].replace(SWEAR2, HIDDEN);
    //         arr[i] = replacedSwear;
    //     }
    // }

    //second way   
    // for(let i in arr){
    //     for(let j in swearArr){
    //         if(arr[i].includes(swearArr[j])) {
    //             let replacedSwear = arr[i].replace(swearArr[j], HIDDEN);
    //             arr[i] = replacedSwear;
    //         }
    //     }
    // }

    //BAD PRACTICE
    // let newArr = arr.map( (item, i) => {
    //     if(arr[i].includes(SWEAR1)) {
    //         item = arr[i].replace(SWEAR1, HIDDEN);
    //     }
    //     else if (arr[i].includes(SWEAR2)){
    //         item = arr[i].replace(SWEAR2, HIDDEN);
    //     }
    //     return item;
    // }).join(' ');

    return newArr = arr.map( (item, i) => {
        if(arr[i].includes(SWEAR1)) {
            return arr[i].replace(SWEAR1, HIDDEN);
        }
        else if (arr[i].includes(SWEAR2)){
            return arr[i].replace(SWEAR2, HIDDEN);
        }
        else return arr[i];
    }).join(' ');

}


// 1 function
console.log("First function: ");
const randomArr = getRandomArray(5, 2, 8);
console.log(randomArr);

// 2 function
console.log("Second function: ");
console.log(getMode(1, 2, 2.2, 3, 4, 4));
console.log(getMode(5, 5, 5, 1, 2, 2.2, 3, 4, 4));

// 3 function
console.log("Third function: ");
console.log(getAverage(1, 2.2, 4, 4, 4, 5));

// 4 function
console.log("Fourth function: ");
console.log(getMedian(1,2,3,4,5));
console.log(getMedian(1,2,3,4,5,6,8,9));
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 5 function
console.log("Fifth function: ");
console.log(filterEvenNumbers(1,2,3,4,5,7));

// 6 function
console.log("Sixth function: ");
console.log(countPositiveNumbers(-1, -2, -4, 1, 3, 7));
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7 function
console.log("Seventh function: ");
console.log(getDividedByFive(1, 2, 3, 4, 5, 20, 25, 30));
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 8 function
console.log("Eighth function: ");
let phrase1 = "Are you fucking kidding?";
let phrase2 = "Holy shit!";
let phrase3 = "It's bullshit!";

console.log(replaceBadWords(phrase1));
console.log(replaceBadWords(phrase2));
console.log(replaceBadWords(phrase3));

