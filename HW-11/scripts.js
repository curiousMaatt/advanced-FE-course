
const ALL_BUTTONS = document.querySelectorAll(".btn");
function disableButtons() {
    return ALL_BUTTONS.forEach( item => {
        if(item.classList.contains("btn-active")){
            item.classList.remove("btn-active");
        }
        item.classList.add("btn-disabled");
    });
}

function playSpecificSound(letter) {
    const button = document.querySelector(`[data-btn-Key${letter}]`);
    const audio = document.querySelector(`[data-Key${letter}]`);

    function playSound(){
        disableButtons();
        button.classList.add("btn-active");
        audio.play();
    }

    button.addEventListener("click", playSound);
}

function playSoundKeyword(e) {
    const button = document.querySelector(`[data-btn-${e.code}]`);
    const audio = document.querySelector(`[data-${e.code}]`);

    if(!audio) return;

    disableButtons();
    button.classList.add("btn-active");
    audio.play();
}

disableButtons();
document.body.addEventListener("keydown", playSoundKeyword);

playSpecificSound('A');
playSpecificSound('S');
playSpecificSound('D');
playSpecificSound('F');
playSpecificSound('G');
playSpecificSound('H');
playSpecificSound('J');
playSpecificSound('K');
playSpecificSound('L');
