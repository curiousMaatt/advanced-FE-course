function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

function generateColors(){
    const squares = document.querySelectorAll(".square");

    squares.forEach( (item) => {
        const color = randomColor();
        item.style.backgroundColor = "#" + color;
    });
}

function generateBlocks() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper", "active");
    document.body.append(wrapper);

    const rowTemplate =
    `<div class="row">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
    </div>`;

    const QUANTITY_OF_ROWS = 5
    let counter = 0;

    while(counter < QUANTITY_OF_ROWS) {
        wrapper.innerHTML += rowTemplate;
        counter++;
    }

    generateColors();
}

function generateBlocksInterval() {
    setInterval(generateColors, 1000);
}

generateBlocks();
generateBlocksInterval();
