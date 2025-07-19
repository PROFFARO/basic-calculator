/**
 * Calculator Class - Handles all calculator operations and display logic
 */
class Calculator {
    constructor() {
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operation = undefined;
        this.shouldResetScreen = false;
        this.memory = 0;
    }

    /**
     * Removes the last digit from the current operand
     */
    backspace() {
        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
    }

    /**
     * Clears all calculator state
     */
    clear() {
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operation = undefined;
        this.shouldResetScreen = false;
    }

    /**
     * Appends a number to the current operand
     * @param {string} number - The number to append
     */
    appendNumber(number) {
        if (this.shouldResetScreen) {
            this.currentOperand = '';
            this.shouldResetScreen = false;
        }
        
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand += number;
        }
    }

    /**
     * Sets the operation to perform
     * @param {string} operation - The operation symbol
     */
    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    /**
     * Performs the calculation based on the current state
     */
    calculate() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (this.operation === 'sqrt') {
            if (current < 0) {
                alert('Error: Cannot calculate square root of a negative number');
                this.clear();
                return;
            }
            computation = Math.sqrt(current);
        } else if (this.operation === '%') {
            if (this.previousOperand === '') {
                computation = current / 100;
            } else {
                computation = (prev * current) / 100;
            }
        } else {
            if (isNaN(prev) || isNaN(current)) return;

            switch (this.operation) {
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '*':
                    computation = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert('Error: Division by zero');
                        this.clear();
                        return;
                    }
                    computation = prev / current;
                    break;
                default:
                    return;
            }
        }

        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetScreen = true;
    }

    /**
     * Updates the calculator display
     * @param {HTMLElement} previousOperandElement - Element to display previous operand
     * @param {HTMLElement} currentOperandElement - Element to display current operand
     */
    updateDisplay(previousOperandElement, currentOperandElement) {
        currentOperandElement.textContent = this.currentOperand;
        if (this.operation != null) {
            previousOperandElement.textContent = `${this.previousOperand} ${this.operation}`;
        } else {
            previousOperandElement.textContent = this.previousOperand;
        }
    }

    // Memory Functions
    memoryStore() {
        this.memory = parseFloat(this.currentOperand);
    }

    memoryRecall() {
        if (this.memory !== null) {
            this.currentOperand = this.memory.toString();
            this.shouldResetScreen = true;
        }
    }

    memoryAdd() {
        this.memory += parseFloat(this.currentOperand);
    }

    memorySubtract() {
        this.memory -= parseFloat(this.currentOperand);
    }

    memoryClear() {
        this.memory = 0;
    }
}

// Initialize calculator and get DOM elements
const calculator = new Calculator();
const previousOperandElement = document.querySelector('.previous-operand');
const currentOperandElement = document.querySelector('.current-operand');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-action="clear"]');
const backspaceButton = document.querySelector('[data-action="backspace"]');
const equalsButton = document.querySelector('[data-action="calculate"]');

// Add event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay(previousOperandElement, currentOperandElement);
    });
});

// Add event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operator);
        calculator.updateDisplay(previousOperandElement, currentOperandElement);
    });
});

// Clear button event listener
clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay(previousOperandElement, currentOperandElement);
});

// Backspace button event listener
backspaceButton.addEventListener('click', () => {
    calculator.backspace();
    calculator.updateDisplay(previousOperandElement, currentOperandElement);
});

// Equals button event listener
equalsButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay(previousOperandElement, currentOperandElement);
});

// Add event listeners for memory buttons
document.querySelectorAll('[data-memory]').forEach(button => {
    button.addEventListener('click', () => {
        const memoryAction = button.dataset.memory;
        switch (memoryAction) {
            case 'mc':
                calculator.memoryClear();
                break;
            case 'mr':
                calculator.memoryRecall();
                break;
            case 'm-plus':
                calculator.memoryAdd();
                break;
            case 'm-minus':
                calculator.memorySubtract();
                break;
        }
        calculator.updateDisplay(previousOperandElement, currentOperandElement);
    });
});

// Keyboard support
document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9' || event.key === '.') {
        calculator.appendNumber(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        calculator.chooseOperation(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        calculator.calculate();
    } else if (event.key === 'Escape') {
        calculator.clear();
    } else if (event.key === 'Backspace') {
        calculator.backspace();
    } else if (event.key === 'r') { // Square root shortcut
        calculator.chooseOperation('sqrt');
        calculator.calculate();
    } else if (event.key === '%') {
        calculator.chooseOperation('%');
        calculator.calculate();
    }
    calculator.updateDisplay(previousOperandElement, currentOperandElement);
});
