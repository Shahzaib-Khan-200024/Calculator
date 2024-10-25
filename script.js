const buttons = document.querySelectorAll('.button');
const input = document.querySelector('.input');

let currentInput = '';
let operation = '';
let firstValue = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (value === 'C') {
      currentInput = '';
      firstValue = '';
      operation = '';
      input.value = '';
    } else if (value === '=') {
      if (operation && currentInput) {
        input.value = eval(`${firstValue} ${operation} ${currentInput}`);
        currentInput = input.value;
        operation = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      operation = value;
      firstValue = currentInput;
      currentInput = '';
    } else {
      currentInput += value;
      input.value = currentInput;
    }
  });
});
