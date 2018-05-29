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
var Parallelogram = /** @class */ (function (_super) {
    __extends(Parallelogram, _super);
    function Parallelogram(color, width, height) {
        if (color === void 0) { color = "---"; }
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(Parallelogram.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value >= 1) {
                this._width = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parallelogram.prototype, "height", {
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
    //------------------Parallelograms----------------------------------
    Parallelogram.prototype.drawFullPara = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        for (i = this.height - 1; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                document.write("&nbsp;");
            }
            this.drawLineOfKohaviot(this.width);
        }
        document.write("</font>");
    };
    Parallelogram.prototype.drawHaloolPara = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        for (i = this.height - 1; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                document.write("&nbsp;");
            }
            if (i == this.height - 1 || i == 0) {
                this.drawLineOfKohaviot(this.width);
            }
            else {
                this.drawHaloolLineOfKohaviot(this.width);
            }
        }
        document.write("</font>");
    };
    Parallelogram.prototype.drawParaOfNums = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        for (i = this.height - 1; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                document.write("&nbsp;");
            }
            this.drawLineOfNums(this.width);
        }
        document.write("</font>");
    };
    Parallelogram.prototype.drawParaOfReversedNums = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        for (i = this.height - 1; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                document.write("&nbsp;");
            }
            this.drawReversedLineOfNums(this.width);
        }
        document.write("</font>");
    };
    Parallelogram.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        //let perimeter: number = ((2 * width) + (2 * height));
        var area = (this.width * this.height);
        //document.write(`<u>Parallelogram's Perimeter</u>: ${perimeter}<br>`);
        document.write("<u>Parallelogram's width</u>: " + this.width + "<br>");
        document.write("<u>Parallelogram's height</u>: " + this.height + "<br>");
        document.write("<u>Parallelogram's Area</u>: " + area + "<br>");
    };
    return Parallelogram;
}(Shape));
//# sourceMappingURL=Parallelogram.js.map