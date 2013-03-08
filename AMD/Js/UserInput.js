/// <reference path="Calculator.js" />
/// <reference path="../Scripts/require.js" />

require(["calculator"], function(calculator) {
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var add = document.getElementById("add");
    var subtract = document.getElementById("subtract");
    var result = document.getElementById("result");

    add.addEventListener("click", function() {
        try {
            error.innerText = "";
            var sum = calculator.add(left.value, right.value);
            result.innerText = sum;
        } catch(e) {
            error.innerText = e.message;
        }
    }, false);

    subtract.addEventListener("click", function() {
        try {
            error.innerText = "";
            var sum = calculator.subtract(left.value, right.value);
            result.innerText = sum;
        } catch(e) {
            error.innerText = e.message;
        }
    }, false);
});
