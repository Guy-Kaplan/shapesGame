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
var RightTriangle = /** @class */ (function (_super) {
    __extends(RightTriangle, _super);
    function RightTriangle(color, size) {
        if (color === void 0) { color = "---"; }
        if (size === void 0) { size = 1; }
        var _this = _super.call(this, color) || this;
        _this.size = size;
        return _this;
    }
    Object.defineProperty(RightTriangle.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            if (value >= 1) {
                this._size = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    //------------------RightTriangle----------------------------------
    RightTriangle.prototype.drawFullTriangle = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.size; i++) {
            this.drawLineOfKohaviot(i);
        }
        document.write("</font>");
    };
    RightTriangle.prototype.drawHaloolTriangle = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.size; i++) {
            if (i == 1 || i == this.size) {
                this.drawLineOfKohaviot(i);
            }
            else {
                this.drawHaloolLineOfKohaviot(i);
            }
        }
        document.write("</font>");
    };
    RightTriangle.prototype.drawTriangleOfNums = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.size; i++) {
            this.drawLineOfNums(i);
        }
        document.write("</font>");
    };
    RightTriangle.prototype.drawTriangleOfReversedNums = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        for (i = this.size; i >= 1; i--) {
            for (j = this.size; j >= i; j--) {
                document.write(j + "&nbsp;");
            }
            document.write("<br>");
        }
        document.write("</font>");
    };
    RightTriangle.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        var yeter = ((this.size * this.size) + (this.size * this.size)); // Pythagoras
        yeter = Math.sqrt(yeter); // Pythagoras
        var perimeter = (this.size + this.size + yeter);
        var area = ((this.size * this.size) / 2);
        document.write("<u>Triangle's size</u>: " + this.size + "<br>");
        document.write("<u>Triangle's yeter</u>: " + yeter + "<br>");
        document.write("<u>Triangle's Perimeter</u>: " + perimeter + "<br>");
        document.write("<u>Triangle's Area</u>: " + area + "<br>");
    };
    return RightTriangle;
}(Shape));
//# sourceMappingURL=Triangle.js.map