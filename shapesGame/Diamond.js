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
var Diamond = /** @class */ (function (_super) {
    __extends(Diamond, _super);
    //public height: number;
    function Diamond(color, width) {
        if (color === void 0) { color = "---"; }
        if (width === void 0) { width = 3; }
        var _this = _super.call(this, color) || this;
        _this.width = width;
        return _this;
    }
    Object.defineProperty(Diamond.prototype, "width", {
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
    //------------------Diamonds----------------------------------
    Diamond.prototype.drawFullDiamond = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        //upper triangle
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
        //bottom triangle
        for (i = (this.width - 2); i >= 1; i -= 2) {
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
    Diamond.prototype.drawHaloolDiamond = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        //upper triangle
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawHaloolLineOfKohaviot2(i); //------
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        //bottom triangle
        for (i = (this.width - 2); i >= 1; i -= 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawHaloolLineOfKohaviot2(i); //------
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write("</font>");
    };
    Diamond.prototype.drawDiamondOfNums = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        //upper triangle
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
        //bottom triangle
        for (i = (this.width - 2); i >= 1; i -= 2) {
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
    Diamond.prototype.drawDiamondOfReversedNums = function () {
        var i;
        var j;
        document.write("<font color=" + this.color + ">");
        //upper triangle
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawReversedLineOfNums2(i);
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        //bottom triangle
        for (i = (this.width - 2); i >= 1; i -= 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawReversedLineOfNums2(i);
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write("</font>");
    };
    Diamond.prototype.displayDiamondDetails = function () {
        //super.displayDetails();
        var halfWidth = (this.width) / 2;
        var yeter = ((halfWidth * halfWidth) + (halfWidth * halfWidth)); // Pythagoras
        yeter = Math.sqrt(yeter); // Pythagoras
        var perimeter = (yeter * 4);
        var area = ((this.width * this.width) / 2);
        document.write("<br><u>Shape's Color</u>: " + this.color + "<br>");
        document.write("<u>Diamond's Width</u>: " + this.width + "<br>");
        document.write("<u>Diamond's Height</u>: " + this.width + "<br>"); // In a diamond: width=height
        document.write("<u>Diamond's Yeter</u>: " + yeter + "<br>");
        document.write("<u>Diamond's Perimeter</u>: " + perimeter + "<br>");
        document.write("<u>Diamond's Area</u>: " + area + "<br>");
    };
    return Diamond;
}(Shape));
//# sourceMappingURL=Diamond.js.map