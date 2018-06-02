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
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, size) {
        if (color === void 0) { color = "---"; }
        if (size === void 0) { size = 1; }
        var _this = _super.call(this, color) || this;
        _this.size = size;
        return _this;
    }
    Object.defineProperty(Square.prototype, "size", {
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
    //------------------Squares----------------------------------
    Square.prototype.drawFullSquare = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.size; i++) {
            this.drawLineOfKohaviot(this.size);
        }
        document.write("</font>");
    };
    Square.prototype.drawHaloolSquare = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.size; i++) {
            if (i == 1 || i == this.size) {
                this.drawLineOfKohaviot(this.size);
            }
            else {
                this.drawHaloolLineOfKohaviot(this.size);
            }
        }
        document.write("</font>");
    };
    Square.prototype.drawSquareOfNums = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.size; i++) {
            this.drawLineOfNums(this.size);
        }
        document.write("</font>");
    };
    Square.prototype.drawSquareOfReversedNums = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.size; i++) {
            this.drawReversedLineOfNums(this.size);
        }
        document.write("</font>");
    };
    Square.prototype.drawColorSquare = function () {
        var newWidth = this.size * 10;
        var newHeight = this.size * 10;
        document.write("<canvas id='myCanvas' width='" + newWidth + "' height='" + newHeight + "'>"); //style='border:1px solid #d3d3d3;'
        document.write("Your browser does not support the HTML5 canvas tag.</canvas>");
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, newWidth, newHeight);
        document.write("<br><br>");
    };
    Square.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        var perimeter = (4 * this.size);
        var area = (this.size * this.size);
        document.write("<u>Square's Size</u>: " + this.size + "<br>");
        document.write("<u>Square's Perimeter</u>: " + perimeter + "<br>");
        document.write("<u>Square's Area</u>: " + area + "<br>");
    };
    return Square;
}(Shape));
//# sourceMappingURL=Square.js.map
