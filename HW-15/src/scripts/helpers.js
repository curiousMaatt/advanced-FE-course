
export function* gerRangeArray(min, max) {
    const minValue = Math.min(min, max);
    const maxValue = Math.max(min, max);

    for( let i = minValue; i <= maxValue; i++){
        yield i;
    }
}

export function getRandomArray(length, min, max) {
    let randomArray = [];

    for( let i = 0; i < length; i++ ) {
        let randomValue = Math.floor((Math.random() * (max-min)) + min);
        randomArray.push(randomValue);
    }

    return randomArray;
}

function decimalFilter(...numbers) {
    return numbers.filter((item) => Number.isInteger(item));
}

export function getMedian(...numbers){
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

export function getMode(...num) {
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
