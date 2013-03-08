function getElement(name) {
    var element = document.getElementById(name);
    return element;
}

function getLeftValue() {
    var element = getElement("left");
    var value = element.value;
    return value;
}

function getRightValue() {
    var element = getElement("right");
    var value = element.value;
    return value;
}

function displayResult(result) {
    var element = getElement("result");
    element.innerText = result;
}

function addNumbers(left, right) {
    return left + right;
}

function subtractNumbers(left, right) {
    return left - right;
}

function add() {
    var left = getLeftValue();
    var right = getRightValue();
    var result = addNumbers(left, right);
    displayResult(result);
}

function subtract() {
    var left = getLeftValue();
    var right = getRightValue();
    var result = subtractNumbers(left, right);
    displayResult(result);
}

var button = document.getElementById("add");
if (button) {
    button.addEventListener("click", add, false);
}
button = document.getElementById("subtract");
if (button) {
    button.addEventListener("click", subtract, false);
}