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
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        if (color === void 0) { color = "White"; }
        if (radius === void 0) { radius = 1; }
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            if (value == 1 || value == 2 || value == 3 || value == 4) {
                this._radius = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    //------------------Circle----------------------------------
    Circle.prototype.drawCircle = function () {
        document.write("<svg height=\"100\" width=\"100\">");
        document.write("<circle cx=\"50\" cy=\"50\" r=\"" + this.radius * 10 + "\" stroke=\"black\" stroke-width=\"3\" fill=\"" + this.color + "\" />");
        document.write("Sorry, your browser does not support inline SVG.</svg>");
        document.write("<br><br>");
    };
    Circle.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        var diameter = this.radius * 2;
        var perimeter = diameter * Math.PI;
        var area = (Math.PI * this.radius * this.radius);
        document.write("<u>Circle's Radius</u>: " + this.radius + "<br>");
        document.write("<u>Circle's Diameter</u>: " + diameter + "<br>");
        document.write("<u>Circle's Perimeter</u>: " + perimeter + "<br>");
        document.write("<u>Circle's Area</u>: " + area + "<br><br>");
        document.write("<b>PIE</b> = " + Math.PI + "<br>");
    };
    return Circle;
}(Shape));
//# sourceMappingURL=Circle.js.map