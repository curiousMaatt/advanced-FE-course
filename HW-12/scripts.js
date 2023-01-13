
const getRandomChinese = async (length) => {
    const AMOUNT_OF_NUMBERS = 5;

    function getSymbol() {
        let date = Date.now().toString();
        const num =  date.slice(date.length - AMOUNT_OF_NUMBERS);
        return String.fromCharCode(num)
    }

    const waitForSymbol = () => 
        new Promise( (resolve) => {
            setTimeout(() => resolve(getSymbol()), 50)
        }); 

    let str = "";

    for( let i = 0; i <= length; i++) {
        str += await waitForSymbol();
    }

    return str;
}

// wrapper 
function wrapperForGetRandomChinese(length) {
    getRandomChinese(length).then((res) => console.log(res));
}

getRandomChinese(4).then((res) => console.log(res));
// console.log(getRandomChinese(4));
wrapperForGetRandomChinese(4);


