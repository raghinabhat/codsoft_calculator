function appendToDisplay(value) {
    const display = document.querySelector('input[name="display"]');
    display.value += value;
}
function clearDisplay() {
    const display = document.querySelector('input[name="display"]');
    display.value = '';
}
function deleteLast() {
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    const display = document.querySelector('input[name="display"]');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
