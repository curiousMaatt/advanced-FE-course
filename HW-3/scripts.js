
// #1
function getMaxDigit(numbers) {
    let numArray = Array.from(numbers.toString()).map(Number);
    let maxNum = numArray[0];

    for( let i = 0; i <= numArray.length; i++) {
        if(numArray[i] > maxNum) {
            maxNum = numArray[i];
        }
    }

    return maxNum;
}


// #2
function myOwnPow(base, power) {
    let numb = 1
    for(let i = 1; i <= power; i++) {
        numb *= base
    }
    return numb
}


// #3
function normalizeName(name) {
    let lowerName = name.toLowerCase();
    let firstLetter = lowerName[0].toUpperCase();
    let withoutFirst = "";

    for(let i = 0; i < lowerName.length; ++i) {
        if(i !== 0) {
            withoutFirst += lowerName[i];
        }
    }

    let newName = firstLetter + withoutFirst;

    return newName
}


// #4
let TAX = 19.5;
function afterTaxes(amount) {
    let percentAmount = amount * TAX / 100;
    let afterTaxes = amount - percentAmount;
    return afterTaxes;
}


// #5
function getRandomNumber(leftVerge, rightVerge) {
    let randomIndex = Math.random();

    let difference = rightVerge - leftVerge;
    let value = Math.floor((randomIndex * difference) + leftVerge);

    return value;
}


// #6
function countLetter(letter, word) {
    let newLetter = letter.toLowerCase();
    let newWord = word.toLowerCase();

    let counter = 0;

    for(let i = 0; i < newWord.length; ++i) {
        if( newWord[i] == newLetter) {
            counter++;
        }
    }

    return counter;
}


// #7
const DOLLAR_SYMBOL = "$";
const exchangeRate = 25;

function convertCurrency(money) {
    let convertedMoney = 0;
    let withoutSymbol = "";

    if( money.includes(DOLLAR_SYMBOL) ) {
        withoutSymbol = money.replace(DOLLAR_SYMBOL,'');
        convertedMoney = Number(withoutSymbol) * exchangeRate;

        return convertedMoney + "UAH";
    }

    if ( money.toLowerCase().includes("uah")) {
        withoutSymbol = money.toLowerCase().replace("uah",'');
        convertedMoney = Number(withoutSymbol) / exchangeRate;

        return convertedMoney + DOLLAR_SYMBOL;
    }

    return"Wwrong values =(";
}


// #8
function randomPassword(n = 8) {
    let basicSymbols = "0123456789";
    let password = "";
    
    for( let i = 0; i < n; ++i) {
        let randomVar = Math.random().toFixed(3);
        let position = Math.floor(randomVar * basicSymbols.length);

        password += basicSymbols.charAt(position);
    }

    return password;
}


// #9
function deleteLetters(letter, word) {
    let newWord = "";

    for( let i = 0; i < word.length; ++i) {
        if( word[i] != letter ) {
            newWord += word[i]
        }

    }

    return newWord;
}


// #10
function isItPalyndrom(word) {
    let value = word.toLowerCase() === word.toLowerCase().split("").reverse().join("");

    return value;
}


// #11
function deleteDuplicateLetter(sentence) {
    let resultStr = "";
    let newStr = sentence.toLowerCase();
    
    for( let i = 0; i < newStr.length; ++i) {
        if(newStr.indexOf(newStr[i]) == newStr.lastIndexOf(newStr[i])) {
            resultStr += newStr[i];
        }

    }
    return resultStr;
}


//_____ First task
let randomNumber = 357812;
console.log("The max digit of " + randomNumber + " is "  + getMaxDigit(randomNumber));


//_____ Second task
let num = 4;
let power = 3;
console.log( num + " ^ " + power + " = " + myOwnPow(num,power));


//_____ Third task
let incorrectName = "вЛад";
console.log(incorrectName + " -> " +  normalizeName(incorrectName));


// _____ Fourth task
let amount = 1000;
console.log(amount +  " -> " + afterTaxes(amount));


// _____ Fifth task
let min = 10; //inclusive
let max = 20; //exclusive
console.log("Random value in range from " + min + " till " + max + " = " +  getRandomNumber(min,max))


// _____ Sixth task
let word = "aaaabbb";
let letter = 'a';
console.log( "The letter " + letter + " in word " + word + " repeats " + countLetter(letter, word) + " times");


// _____ Seventh task
let cash1 = "100$";
let cash2 = "2500UAH";
let cash3 = "2500uah";

console.log(cash1 + " = " + convertCurrency(cash1));
console.log(cash2 + " = " + convertCurrency(cash2));
console.log(cash3 + " = " + convertCurrency(cash3));


//_____ Eighth task
console.log("Random password, with 8 symbols: " + randomPassword());
console.log("Random password, with 4 symbols: " + randomPassword(4));


// _____ Ninth task
let char = "g";
let str = "adgppog gth"
console.log("String '" + str + "' without " + char + " = " +  " '" + deleteLetters(char, str) + "' ");


// _____ Tenth task
let word1 = "Мадам";
let word2 = "wow";
let word3 = "Nope"
console.log("'"+ word1 + "' " + " is palindrome - "  + isItPalyndrom(word1));
console.log("'"+ word2 + "' " + " is palindrome - "  + isItPalyndrom(word2));
console.log("'"+ word3 + "' " + " is palindrome - "  + isItPalyndrom(word3));


// _____ Eleventh task
let sentence = "A long time ago in a galaxy far, far away..."
console.log(sentence + " --> "  + deleteDuplicateLetter(sentence))


