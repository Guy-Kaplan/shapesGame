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
var TwoColorsCircle = /** @class */ (function (_super) {
    __extends(TwoColorsCircle, _super);
    function TwoColorsCircle(color, radius, outerColor) {
        if (color === void 0) { color = "White"; }
        if (radius === void 0) { radius = 1; }
        if (outerColor === void 0) { outerColor = "Black"; }
        var _this = _super.call(this, color, radius) || this;
        _this.outerColor = outerColor;
        return _this;
    }
    //------------------TwoColorsCircle----------------------------------
    TwoColorsCircle.prototype.drawTwoColorsCircle = function () {
        document.write("<svg width=\"100\" height=\"100\">");
        document.write("<circle cx=\"50\" cy=\"50\" r=\"" + this.radius * 10 + "\" stroke=\"" + this.outerColor + "\" stroke-width=\"4\" fill=\"" + this.color + "\" onclick=\"myFunction(this)\" />");
        document.write("Sorry, your browser does not support inline SVG.</svg>");
        document.write("<br><br>");
    };
    TwoColorsCircle.prototype.myFunction = function (elmnt) {
        elmnt.style.cx++; // not working...
    };
    TwoColorsCircle.prototype.displayDetails = function () {
        document.write("<u>Shape's Outer Color</u>: " + this.outerColor);
        _super.prototype.displayDetails.call(this);
        //let diameter: number = this.radius * 2;
        //let perimeter: number = diameter * Math.PI;
        //let area: number = (Math.PI * this.radius * this.radius);
        //document.write(`<u>Circle's Radius</u>: ${this.radius}<br>`);
        //document.write(`<u>Circle's Diameter</u>: ${diameter}<br>`);
        //document.write(`<u>Circle's Perimeter</u>: ${perimeter}<br>`);
        //document.write(`<u>Circle's Area</u>: ${area}<br><br>`);
        //document.write(`<b>PIE</b> = ${Math.PI}<br>`);
    };
    return TwoColorsCircle;
}(Circle));
//# sourceMappingURL=TwoColorsCircle.js.map