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
var RainbowRectangle = /** @class */ (function (_super) {
    __extends(RainbowRectangle, _super);
    //private _width: number;
    //private _height: number;
    function RainbowRectangle(color, width, height) {
        if (color === void 0) { color = "Rainbow"; }
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    //------------------RainbowRectangle----------------------------------
    RainbowRectangle.prototype.drawRainbowRectangle = function () {
        var newWidth = this.width * 10;
        var newHeight = this.height * 10;
        document.write("<canvas id='myCanvas' width='" + newWidth + "' height='" + newHeight + "'>"); //style='border:1px solid #d3d3d3;'
        document.write("Your browser does not support the HTML5 canvas tag.</canvas>");
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var grd = ctx.createLinearGradient(0, 0, newWidth, 0);
        grd.addColorStop(0, "red");
        //grd.addColorStop(0.1, "---");
        grd.addColorStop(0.2, "yellow");
        //grd.addColorStop(0.3, "---");
        grd.addColorStop(0.4, "green");
        //grd.addColorStop(0.5, "---");
        grd.addColorStop(0.6, "lightblue");
        //grd.addColorStop(0.7, "---");
        grd.addColorStop(0.8, "blue");
        //grd.addColorStop(0.9, "---");
        grd.addColorStop(1, "purple");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, newWidth, newHeight);
        document.write("<br><br>");
    };
    return RainbowRectangle;
}(Rectangle));
//# sourceMappingURL=RainbowRectangle.js.map