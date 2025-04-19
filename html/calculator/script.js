    const screen = document.querySelector('.screen');
    const numberButtons = document.querySelectorAll('.number');
    const operationButtons = document.querySelectorAll('.operation');
    const resetButton = document.querySelector('.reset');

    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentInput += button.textContent;
            screen.textContent = currentInput;
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const op = button.textContent;

            if (op === '=') {
                if (firstOperand && operator && currentInput) {
                    const result = eval(`${firstOperand}${operator}${currentInput}`);
                    screen.textContent = result;
                    currentInput = result.toString();
                    operator = '';
                    firstOperand = '';
                }
            } else {
                if (currentInput) {
                    firstOperand = currentInput;
                    operator = op;
                    currentInput = '';
                }
            }
        });
    });

    resetButton.addEventListener('click', () => {
        currentInput = '';
        operator = '';
        firstOperand = '';
        screen.textContent = '';
    });