
let min;
let max;

while(isNaN(min)) {
    min = Math.round(prompt("Enter the number from which we will start to sum: ", 10));
}

while(isNaN(max) ||  max <= min ) {
    max = Math.round(prompt("Enter the number till which we will sum: (It has to be greater than N)", 12));
}

let skipEvenNumbers = confirm("Should we miss even numbers?")
let sum = 0;

function isOdd(num){
    return num % 2 !== 0;
}

for(let i = min; i <= max; ++i) { 
    if(skipEvenNumbers && isOdd(i) || !skipEvenNumbers) {
        sum += i;
    }
}

console.log("The sum is equal to: ");
console.log(sum);
