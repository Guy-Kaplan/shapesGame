var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Trapezoid = /** @class */ (function (_super) {
    __extends(Trapezoid, _super);
    function Trapezoid(color, height) {
        if (color === void 0) { color = "---"; }
        if (height === void 0) { height = 1; }
        var _this = _super.call(this, color) || this;
        //this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(Trapezoid.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (value >= 1) {
                this._height = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    //------------------Trapezoids----------------------------------
    Trapezoid.prototype.drawFullTrap = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 0; i < this.height; i++) {
            this.drawLineOfKohaviot(this.height + i);
        }
        document.write("</font>");
    };
    Trapezoid.prototype.drawHaloolTrap = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 0; i < this.height; i++) {
            if (i == 0 || i == this.height - 1) {
                this.drawLineOfKohaviot(this.height + i);
            }
            else {
                this.drawHaloolLineOfKohaviot(this.height + i);
            }
        }
        document.write("</font>");
    };
    Trapezoid.prototype.drawTrapOfNums = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 0; i < this.height; i++) {
            this.drawLineOfNums(this.height + i);
        }
        document.write("</font>");
    };
    Trapezoid.prototype.drawTrapOfReversedNums = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 0; i < this.height; i++) {
            this.drawReversedLineOfNums(this.height + i);
        }
        document.write("</font>");
    };
    Trapezoid.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        var width = (this.height) + (this.height - 1);
        var katan = width - this.height;
        var yeter = ((this.height * this.height) + (katan * katan)); // Pythagoras
        yeter = Math.sqrt(yeter); // Pythagoras
        var areaOfTriangle = ((this.height * katan) / 2);
        var areaOfSquare = (this.height * this.height);
        var perimeter = (this.height * 2) + width + yeter;
        var area = areaOfTriangle + areaOfSquare;
        document.write("<u>Trapezoid's height</u>: " + this.height + "<br>");
        document.write("<u>Trapezoid's width</u>: " + width + "<br>");
        document.write("<u>Trapezoid's yeter</u>: " + yeter + "<br>");
        document.write("<u>Trapezoid's Perimeter</u>: " + perimeter + "<br>");
        document.write("<u>Trapezoid's Area</u>: " + area + "<br>");
    };
    return Trapezoid;
}(Shape));
//# sourceMappingURL=Trapezoid.js.map