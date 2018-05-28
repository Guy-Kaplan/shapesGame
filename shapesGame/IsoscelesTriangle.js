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
var IsoscelesTriangle = /** @class */ (function (_super) {
    __extends(IsoscelesTriangle, _super);
    function IsoscelesTriangle(color, width) {
        if (color === void 0) { color = "---"; }
        if (width === void 0) { width = 3; }
        var _this = _super.call(this, color) || this;
        _this.width = width;
        return _this;
    }
    Object.defineProperty(IsoscelesTriangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value >= 3 && value % 2 == 1 && value == Math.floor(value)) {
                this._width = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    //------------------IsoscelesTriangles----------------------------------
    IsoscelesTriangle.prototype.drawFullIso = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawLineOfKohaviot2(i);
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write("</font>");
    };
    IsoscelesTriangle.prototype.drawHaloolIso = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            if (i == 1 || i == this.width) {
                this.drawLineOfKohaviot2(i);
            }
            else {
                this.drawHaloolLineOfKohaviot2(i);
            }
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write("</font>");
    };
    IsoscelesTriangle.prototype.drawIsoOfNums = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawLineOfNums2(i);
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write("</font>");
    };
    IsoscelesTriangle.prototype.drawIsoOfReversedNums = function () {
        var i;
        var j;
        var k;
        document.write("<font color=" + this.color + ">");
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            for (k = i; k >= 1; k--) {
                document.write(k + "&nbsp;");
            }
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write("</font>");
    };
    IsoscelesTriangle.prototype.displayIsoDetails = function () {
        //super.displayDetails();
        this.height = Math.ceil(this.width / 2);
        var halfWidth = (this.width) / 2;
        var yeter = ((this.height * this.height) + (halfWidth * halfWidth)); // Pythagoras
        yeter = Math.sqrt(yeter); // Pythagoras
        var perimeter = (this.width + yeter + yeter);
        var area = ((this.height * this.width) / 2);
        document.write("<br><u>Shape's Color</u>: " + this.color + "<br>");
        document.write("<u>Isosceles Triangle's Width</u>: " + this.width + "<br>");
        document.write("<u>Isosceles Triangle's Height</u>: " + this.height + "<br>");
        document.write("<u>Isosceles Triangle's Yeter</u>: " + yeter + "<br>");
        document.write("<u>Isosceles Triangle's Perimeter</u>: " + perimeter + "<br>");
        document.write("<u>Isosceles Triangle's Area</u>: " + area + "<br>");
    };
    return IsoscelesTriangle;
}(Shape));
//# sourceMappingURL=IsoscelesTriangle.js.map