let display = document.getElementById('display');
let currentInput = '0';
let shouldResetDisplay = false;

function updateDisplay() {
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    shouldResetDisplay = false;
    updateDisplay();
}

function appendToDisplay(value) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else if (value === '.' && currentInput.includes('.')) {
        return;
    } else {
        currentInput += value;
    }
    
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        let expression = currentInput.replace(/×/g, '*');
        let result = eval(expression);
        
        if (isNaN(result) || !isFinite(result)) {
            currentInput = 'Error';
        } else {
            currentInput = result.toString();
        }
        
        shouldResetDisplay = true;
    } catch (error) {
        currentInput = 'Error';
        shouldResetDisplay = true;
    }
    updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key === '*' ? '×' : key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

// Prevent form submission on Enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});
