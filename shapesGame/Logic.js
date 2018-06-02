var Logic = /** @class */ (function () {
    function Logic() {
    }
    Logic.prototype.isFirstKeletWrong = function (num) {
        if (num != 1 && num != 2 && num != 3 && num != 4 && num != 5 && num != 6 && num != 7 && num != 8 && num != 9 && num != 10 && num != 11) {
            return true;
        }
        return false;
    };
    Logic.prototype.isSecondKeletWrong = function (num) {
        if (num < 1 || num != Math.floor(num)) {
            return true;
        }
        return false;
    };
    Logic.prototype.isThirdKeletWrong = function (num) {
        if (num != 1 && num != 2 && num != 3 && num != 4 && num != 5) {
            return true;
        }
        return false;
    };
    Logic.prototype.isFourthKeletWrong = function (shapeColor) {
        if (shapeColor === "") {
            return true;
        }
        return false;
    };
    Logic.prototype.isIsoSecondKeletWrong = function (num) {
        if (num < 3 || num % 2 != 1 || num != Math.floor(num)) {
            return true;
        }
        return false;
    };
    Logic.prototype.isEllipseSecondKeletWrong = function (num) {
        if (num < 1 || num > 20 || isNaN(num) === true) {
            return true;
        }
        return false;
    };
    Logic.prototype.isCircleSecondKeletWrong = function (num) {
        if (num < 1 || num > 4 || isNaN(num) === true) {
            return true;
        }
        return false;
    };
    return Logic;
}());
//# sourceMappingURL=Logic.js.map
