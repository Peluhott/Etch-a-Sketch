function userInput(){
    let boxInput = parseInt(prompt("Enter a number 1-100"));
    if(typeof boxInput === 'number'){
        return boxInput;
    }
    else {
        return 'Must be a valid number between 1-100';
    }
}

const boxContainer = document.querySelector('.container');


function generateGrid(value){
    boxContainer.innerHTML = '';
    const boxDim = 500 / value;
    
for(let i = 0; i < value ** 2; i++){
    const box = document.createElement('div');
    box.classList = 'boxes';
    boxContainer.appendChild(box);
    box.style.width = `${boxDim}px`;
    box.style.height = `${boxDim}px`;
    box.addEventListener('mouseenter', () => {
        box.classList.add('hovered');
    })
    
}
}
generateGrid(16);
const bttn = document.getElementById('change');
bttn.addEventListener('click',() => {
    generateGrid(userInput());
})



