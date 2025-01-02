
generateGrid(initialBoxes);

const button = document.getElementById('change');
button.addEventListener('click', () => {
    generateGrid(userInput());
})