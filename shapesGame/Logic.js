var Logic = /** @class */ (function () {
    function Logic() {
    }
    Logic.prototype.isSecondKeletTakin = function (num) {
        if (num < 1 || num != Math.floor(num)) {
            return false;
        }
        return true;
    };
    Logic.prototype.isThirdKeletTakin = function (num) {
        if (num != 1 && num != 2 && num != 3 && num != 4) {
            return false;
        }
        return true;
    };
    Logic.prototype.isIsoSecondKeletTakin = function (num) {
        //if (num < 1 || num != Math.floor(num)) {
        if (num < 3 || num % 2 != 1 || num != Math.floor(num)) {
            return false;
        }
        return true;
    };
    Logic.prototype.isEllipseSecondKeletTakin = function (num) {
        //if (num < 1 || num != Math.floor(num)) {
        if (num < 1 || num > 20) {
            return false;
        }
        return true;
    };
    Logic.prototype.isCircleSecondKeletTakin = function (num) {
        if (num < 1 || num > 4) {
            return false;
        }
        return true;
    };
    return Logic;
}());
//# sourceMappingURL=Logic.js.map