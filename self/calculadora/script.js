let display = document.getElementById('display');
let history = document.getElementById('history');

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let expression = display.value;
    try {
        let result = eval(expression);
        display.value = result;
        history.innerHTML += `<div>${expression} = ${result}</div>`;
    } catch (error) {
        display.value = 'Error';
    }
}

//fechar guia
function fecharNovaGuia() {
    window.close();
}