
let N;
let M;

while(isNaN(N)) {
    N = Math.round(prompt("Enter the number from which we will start to sum: ", 10));
}

while(isNaN(M) ||  M <= N ) {
    M = Math.round(prompt("Enter the number from which we will start to sum: (It has to be greater than N)", 12));
}

let numbersType = confirm("Should we miss even nubmers?")
let sum = 0;

for(let i = N; i <= M; ++i) {
    if(numbersType) {
        if( i % 2 != 0) {
            sum += i;    
        }
    }
    else
        sum += i;
}

console.log("The sum is equal to: ");
console.log(sum);
