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
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(color, color2, width, height) {
        if (color === void 0) { color = "White"; }
        if (color2 === void 0) { color2 = "White"; }
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        var _this = _super.call(this, color) || this;
        _this.color2 = color2;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(Ellipse.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value >= 1 && value <= 20) {
                this._width = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (value >= 1 && value <= 20) {
                this._height = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    //------------------Ellipse----------------------------------
    Ellipse.prototype.drawEllipse = function () {
        var newWidth = this.width * 10;
        var newHeight = this.height * 10;
        document.write("<svg height=\"400\" width=\"400\">");
        document.write("<defs>");
        document.write("<linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">");
        document.write("<stop offset=\"0%\" style = \"stop-color:" + this.color + ";stop-opacity:1\" />"); //style = "stop-color:rgb(255,255,0);stop-opacity:1"
        document.write("<stop offset=\"100%\" style=\"stop-color:" + this.color2 + ";stop-opacity:1\" />"); //style="stop-color:rgb(255,0,0);stop-opacity:1"
        document.write("</linearGradient></defs>");
        document.write("<ellipse cx=\"200\" cy=\"200\" rx=\"" + newWidth + "\" ry=\"" + newHeight + "\" fill=\"url(#grad1)\" /></svg>");
        document.write("<br><br>");
    };
    Ellipse.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        //let diameter: number = this.radius * 2;
        //let perimeter: number = diameter * Math.PI;
        //let area: number = (Math.PI * this.radius * this.radius);
        document.write("<u>Shape's Second Color</u>: " + this.color2 + "<br>");
        document.write("<u>Ellipse's width</u>: " + this.width + "<br>");
        document.write("<u>Ellipse's height</u>: " + this.height + "<br>");
        //document.write(`<u>Circle's Area</u>: ${area}<br><br>`);
        //document.write(`<b>PIE</b> = ${Math.PI}<br>`);
    };
    return Ellipse;
}(Shape));
//# sourceMappingURL=Ellipse.js.map