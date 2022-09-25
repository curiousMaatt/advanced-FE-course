
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// №1
function getMyTaxes(salary) {
    return salary * this.tax;
}

// №2
function getMiddleTaxes(country) {
    return this.tax * this.middleSalary; 
}

// №3
function getTotalTaxes(country) {
    return this.tax * this.middleSalary * this.vacancies;
}

// №4
function getRandomNumber(leftVerge, rightVerge) {
    return Math.floor((Math.random()  * (rightVerge - leftVerge)) + leftVerge);
}

function getMySalary(country) {
    function mySalaryCounter(country) {
        let salary = getRandomNumber(1500, 2000);
        let taxes = salary * this.tax;
        let profit = salary - taxes;

        console.log({ salary, taxes, profit });
    }
    
    const fuWrapper = mySalaryCounter.bind(country);

    setInterval(fuWrapper, 10000);
}

// first function
console.log(getMyTaxes.call(ukraine, 1000));

// second function
console.log(getMiddleTaxes.call(ukraine));

// third function
console.log(getTotalTaxes.call(ukraine));

// fourth function
getMySalary(ukraine);

