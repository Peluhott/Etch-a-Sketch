let initialBoxes = 16;

function userInput(){
    let input = parseInt(prompt("Enter a number"),10);
    if(input > 0 && input <= 100){
        return input;
    }
    else { 
        return 'Input must be a valid number between 1-100';
    }
}
const container = document.querySelector(".container");
function generateGrid(boxValue){
    container.innerHTML = '';
    for(let i = 0; i < boxValue ** 2; i++){
        const box = document.createElement('div');
        box.className = 'boxes';
        container.appendChild(box);
    }
}