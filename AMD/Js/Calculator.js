/// <reference path="../Scripts/require.js" />
/// 

define("calculator", [], function() {
    var calculator = {};

    calculator.add = function (left, right) {
        return (+left) + (+right);
    };

    calculator.subtract = function (left, right) {
        return (+left) - (+right);
    };

    return calculator;
});

