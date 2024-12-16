let resultScreen = document.getElementById("result");

function appendValue(value) {
    resultScreen.value += value;
}

function clearScreen() {
    resultScreen.value = "";
}

function backspace() {
    resultScreen.value = resultScreen.value.slice(0, -1);
}

function calculate() {
    try {
        resultScreen.value = eval(resultScreen.value);
    } catch (error) {
        alert("Invalid Input");
    }
}
