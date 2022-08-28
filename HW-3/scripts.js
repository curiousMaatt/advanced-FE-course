
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

    withoutFirst = "";
    for( let i = 0; i < lowerName.length; ++i ) {
        if(i == 0) {
            continue
        }
        else 
            withoutFirst += lowerName[i];
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

function convertCurrency(money) {
    let convertedMoney = 0;
    let withoutSymbol = "";

    if( money.includes(DOLLAR_SYMBOL) ) {
        withoutSymbol = money.replace(DOLLAR_SYMBOL,'');
        convertedMoney = Number(withoutSymbol) * 25;

        return convertedMoney + "UAH";
    }

    if ( money.toLowerCase().includes("uah")) {
        withoutSymbol = money.toLowerCase().replace("uah",'');
        convertedMoney = Number(withoutSymbol) / 25;

        return convertedMoney + DOLLAR_SYMBOL;
    }
    else 
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
    newWord = "";

    for( let i = 0; i < word.length; ++i) {
        if( word[i] != letter ) {
            newWord += word[i]
        }

    }

    return newWord;
}


// #10
function isItPalyndrom(word) {
    value = word.toLowerCase() === word.toLowerCase().split("").reverse().join("");

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
let x = 357812;
console.log("The max digit of " + x + " is "  + getMaxDigit(x));


//_____ Second task
let a = 4;
let n = 3;
console.log( a + " ^ " + n + " = " + myOwnPow(a,n));


//_____ Third task
let Name = "вЛад";
console.log(Name + " -> " +  normalizeName(Name));


// _____ Fourth task
let amount = 1000;
console.log(amount +  " -> " + afterTaxes(amount));


// _____ Fifth task
let A = 10; //inclusive
let B = 20; //exclusive
console.log("Random value in range from " + A + " till " + B + " = " +  getRandomNumber(A,B))


// _____ Sixth task
let Word = "aaaabbb";
let Letter = 'a';
console.log( "The letter " + Letter + " in word " + Word + " repeats " + countLetter(Letter, Word) + " times");


// _____ Seventh task
cash1 = "100$";
cash2 = "2500UAH";
cash3 = "2500uah";

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
let Word1 = "Мадам";
let Word2 = "wow";
let Word3 = "Nope"
console.log("'"+ Word1 + "' " + " is palindrome - "  + isItPalyndrom(Word1));
console.log("'"+ Word2 + "' " + " is palindrome - "  + isItPalyndrom(Word2));
console.log("'"+ Word3 + "' " + " is palindrome - "  + isItPalyndrom(Word3));


// _____ Eleventh task
let Sentence = "A long time ago in a galaxy far, far away..."
console.log(Sentence + " --> "  + deleteDuplicateLetter(Sentence))

