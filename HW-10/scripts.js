
const wrapper = document.querySelector(".wrapper");

function generateColors(){
    const squares = document.querySelectorAll(".square");

    squares.forEach( (item) => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        item.style.backgroundColor = "#" + randomColor;
    });
}

function generateBlocks() {
    generateColors();
    wrapper.classList.add("active");
}

function generateBlocksInterval() {
    const fuColoring = generateColors.bind();
    setInterval(fuColoring, 1000);
}

generateBlocks();
generateBlocksInterval();
