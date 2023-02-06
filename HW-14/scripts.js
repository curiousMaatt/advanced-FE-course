
// Enternal id generator
function* createIdGenerator() {
    let i = 0;

    while(true) {
        i++;
        yield console.log(i);
    }
}

// Enternal id generator
// const idGenerator = createIdGenerator();
// idGenerator.next().value;
// idGenerator.next().value;
// idGenerator.next().value;


// HW realisation
function* newFontSizeGenerator(val) {
    const text = document.querySelector(".sample-text");
    text.style.fontSize = val + 'px';
    
    let str = yield text.style.fontSize;
    while(true){
        if(str == "up") {
            // getting right font size for em units
            let style = window.getComputedStyle(text, null).getPropertyValue('font-size');
            let active_size = parseFloat(style);
    
            text.style.fontSize = (active_size + 2) +'px';
            str = yield text.style.fontSize;
        }
        else if(str == "down") {
            // getting right font size for em units
            let style = window.getComputedStyle(text, null).getPropertyValue('font-size');
            let active_size = parseFloat(style);
    
            text.style.fontSize = (active_size - 2) +'px';
            str = yield text.style.fontSize;
        }
        else {
            str = yield text.style.fontSize;
        }
    }
}

const btn_decrease = document.querySelector(".btn_decrease");
const btn_increase = document.querySelector(".btn_increase");

// for initializing
const fontChange = newFontSizeGenerator(14);
fontChange.next("up").value;  // --> current size of font (14)

btn_increase.addEventListener("click", () => {
    fontChange.next("up").value;
});
btn_decrease.addEventListener("click", () => {
    fontChange.next("down").value;
});

