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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, width, height) {
        if (color === void 0) { color = "---"; }
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
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
    Object.defineProperty(Rectangle.prototype, "height", {
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
    //------------------Rectangles----------------------------------
    Rectangle.prototype.drawFullRect = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.height; i++) {
            this.drawLineOfKohaviot(this.width);
        }
        document.write("</font>");
    };
    Rectangle.prototype.drawHaloolRect = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.height; i++) {
            if (i == 1 || i == this.height) {
                this.drawLineOfKohaviot(this.width);
            }
            else {
                this.drawHaloolLineOfKohaviot(this.width);
            }
        }
        document.write("</font>");
    };
    Rectangle.prototype.drawRectOfNums = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.height; i++) {
            this.drawLineOfNums(this.width);
        }
        document.write("</font>");
    };
    Rectangle.prototype.drawRectOfReversedNums = function () {
        var i;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.height; i++) {
            this.drawReversedLineOfNums(this.width);
        }
        document.write("</font>");
    };
    Rectangle.prototype.drawColorRect = function () {
        var newWidth = this.width * 10;
        var newHeight = this.height * 10;
        document.write("<canvas id='myCanvas' width='" + newWidth + "' height='" + newHeight + "'>"); //style='border:1px solid #d3d3d3;'
        document.write("Your browser does not support the HTML5 canvas tag.</canvas>");
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, newWidth, newHeight);
        document.write("<br><br>");
    };
    Rectangle.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        var perimeter = ((2 * this.width) + (2 * this.height));
        var area = (this.width * this.height);
        document.write("<u>Rectangle's Width</u>: " + this.width + "<br>");
        document.write("<u>Rectangle's Height</u>: " + this.height + "<br>");
        document.write("<u>Rectangle's Perimeter</u>: " + perimeter + "<br>");
        document.write("<u>Rectangle's Area</u>: " + area + "<br>");
    };
    return Rectangle;
}(Shape));
//# sourceMappingURL=Rectangle.js.map
