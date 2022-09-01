
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
    if(num % 2 != 0) {
        return true;
    }
    else false;
}

for(let i = min; i <= max; ++i) {    
    if(skipEvenNumbers && isOdd(i)) {
        sum += i;
    }
    else if (skipEvenNumbers == false) {
        sum += i;
    }

}

console.log("The sum is equal to: ");
console.log(sum);
