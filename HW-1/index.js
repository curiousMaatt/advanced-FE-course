
let bread =  15.678;
let chocolate = 123.965;
let milk = 90.2345;
let AMOUNT = 3;


//Використовуючи вбудований об'єкт Math – виведіть максимальне число
console.log("The biggest number is: " + Math.max(bread, chocolate, milk));


// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log("The smallest number is: " + Math.min(bread, chocolate, milk));


// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let costOfProducts = bread + chocolate + milk;
console.log("The cost of products is "  +costOfProducts + " UAH");


// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості
// кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
let breadNoFractions =  Math.floor(bread);
let chocolateNoFractions = Math.floor(chocolate);
let milkNoFractions = Math.floor(milk);
let sumSmaller = breadNoFractions + chocolateNoFractions + milkNoFractions;
console.log("The cost without coins is " + sumSmaller + " UAH");


// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
costToHundreds = Math.round(costOfProducts/100) * 100;
console.log("The rounded cost to hundredth is "  + costToHundreds + " UAH");


//  Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
costOfProductsToSmaller = Math.floor(costOfProducts);
console.log("The cost of products rounded down to a smaller number is "  + costOfProductsToSmaller + " UAH");

console.log( "The cost of products rounded down to a smaller number is an EVEN number - " + ((costOfProductsToSmaller % 2) == 0) );


// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let MONEY = 500;
let change = MONEY - costOfProducts;
console.log("The change of 500 UAH will be " + change + " UAH");


// Виведіть середнє значення цін, округлене до другого знаку після коми
let average = costOfProducts / AMOUNT;
let averageRounded = average.toFixed(2);
console.log("The average arithmetic cost is " + averageRounded + " UAH");


// (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
let randomSale = ((Math.random() * 100) + 1).toFixed(1)
console.log("Your random sale is " + randomSale + "%" );


// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
let percentCost = (costOfProducts * randomSale) / 100;
let newCostOfProducts = (costOfProducts - percentCost).toFixed(2);
console.log("The cost after sale is " + newCostOfProducts + " UAH");


// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
let costItSelf = costOfProducts / 2;
let income = (newCostOfProducts - costItSelf).toFixed(2);
console.log("The income:  " + income + " UAH");
 
 