var GUI = /** @class */ (function () {
    function GUI() {
    }
    GUI.prototype.showChromeMsg = function () {
        alert("Open this game ONLY on GOOGLE CHROME!!!");
    };
    GUI.prototype.checkFirstKelet = function (num) {
        if (num != 1 && num != 2 && num != 3 && num != 4 && num != 5 && num != 6 && num != 7 && num != 8 && num != 9 && num != 10 && num != 11) {
            document.write("<h2><b>Error 1: Select 1-11 ONLY, for the wanted shape</b></h2>");
            document.write("<h2><b>Press F5 (Refresh)</b></h2>");
            //let userRectangle: Rectangle = new Rectangle("black", 20, 10);
            //userRectangle.drawFullRect();
        }
    };
    GUI.prototype.checkThirdKelet = function (num) {
        if (num != 1 && num != 2 && num != 3 && num != 4) {
            document.write("<h2><b>Error 3: Select 1-4 ONLY</b></h2>");
            document.write("<h2><b>Press F5 (Refresh)</b></h2>");
        }
    };
    GUI.prototype.checkIsoSecondKelet = function (num) {
        if (num < 3 || num % 2 != 1 || num != Math.floor(num)) {
            document.write("<h2><b>Error 4: Enter a positive, greater than 3 and odd integer number ONLY</b></h2>");
            document.write("<h2><b>Press F5 (Refresh)</b></h2>");
        }
    };
    GUI.prototype.checkSecondKelet = function (num) {
        if (num < 1 || num != Math.floor(num)) {
            document.write("<h2><b>Error 2: Enter a positive integer number ONLY</b></h2>");
            document.write("<h2><b>Press F5 (Refresh)</b></h2>");
        }
    };
    GUI.prototype.checkEllipseSecondKelet = function (num) {
        if (num < 1 || num > 20) {
            document.write("<h2><b>Error 5: Select 1-20 ONLY</b></h2>");
            document.write("<h2><b>Press F5 (Refresh)</b></h2>");
        }
    };
    GUI.prototype.checkCircleSecondKelet = function (num) {
        if (num < 1 || num > 4) {
            document.write("<h2><b>Error 6: Select 1-4 ONLY, for the radius</b></h2>");
            document.write("<h2><b>Press F5 (Refresh)</b></h2>");
        }
    };
    GUI.prototype.getShape = function () {
        var shape;
        shape = Number(prompt("Welcome to Shapes Game.\nWe will draw here a shape designed by your choices.\nHave fun :)\nSelect wanted shape:\n1) Square\n2) Rectangle\n3) Right Triangle\n4) Parallelogram\n5) Right Trapezoid\n6) Isosceles Triangle\n7) Diamond\n8) Rainbow Rectangle\n9) Circle\n10) Gradient Ellipse\n11) Two Colors Circle"));
        return shape;
    };
    GUI.prototype.getSquareSize = function () {
        var squareSize;
        squareSize = Number(prompt("Enter square side length:"));
        return squareSize;
    };
    GUI.prototype.getRectWidth = function () {
        var rectWidth;
        rectWidth = Number(prompt("Enter rectangle width:"));
        return rectWidth;
    };
    GUI.prototype.getRectHeight = function () {
        var rectHeight;
        rectHeight = Number(prompt("Enter rectangle height:"));
        return rectHeight;
    };
    GUI.prototype.getTriangleSize = function () {
        var triangleSize;
        triangleSize = Number(prompt("Enter triangle side length:"));
        return triangleSize;
    };
    GUI.prototype.getParaWidth = function () {
        var paraWidth;
        paraWidth = Number(prompt("Enter parallelogram width:"));
        return paraWidth;
    };
    GUI.prototype.getParaHeight = function () {
        var paraHeight;
        paraHeight = Number(prompt("Enter parallelogram height:"));
        return paraHeight;
    };
    GUI.prototype.getTrapWidth = function () {
        var trapWidth;
        trapWidth = Number(prompt("Enter trapezoid width:"));
        return trapWidth;
    };
    GUI.prototype.getTrapHeight = function () {
        var trapHeight;
        trapHeight = Number(prompt("Enter trapezoid height:"));
        return trapHeight;
    };
    GUI.prototype.getIsoWidth = function () {
        var isoWidth;
        isoWidth = Number(prompt("Enter isosceles triangle width:\n(MUST BE 3 or more, whole and odd number)"));
        return isoWidth;
    };
    GUI.prototype.getDiamondWidth = function () {
        var diamondWidth;
        diamondWidth = Number(prompt("Enter diamond width:\n(MUST BE 3 or more, whole and odd number)"));
        return diamondWidth;
    };
    GUI.prototype.getCircleRadius = function () {
        var circleRadius;
        circleRadius = Number(prompt("Enter circle radius (1-4 ONLY):"));
        return circleRadius;
    };
    GUI.prototype.getEllipseWidth = function () {
        var ellipseWidth;
        ellipseWidth = Number(prompt("Enter ellipse width (1-20 ONLY):"));
        return ellipseWidth;
    };
    GUI.prototype.getEllipseHeight = function () {
        var ellipseHeight;
        ellipseHeight = Number(prompt("Enter ellipse height (1-20 ONLY):"));
        return ellipseHeight;
    };
    GUI.prototype.getShapeContent = function () {
        var shapeContent;
        shapeContent = Number(prompt("Select shape style:\n1) *****\n2) *   *\n3) 12345\n4) 54321"));
        return shapeContent;
    };
    GUI.prototype.getShapeColor = function () {
        var shapeColor;
        shapeColor = prompt("Enter a color for your shape:");
        return shapeColor;
    };
    GUI.prototype.getEllipseLeftColor = function () {
        var ellipseLeftColor;
        ellipseLeftColor = prompt("Enter ellipse left color:");
        return ellipseLeftColor;
    };
    GUI.prototype.getEllipseRightColor = function () {
        var ellipseRightColor;
        ellipseRightColor = prompt("Enter ellipse right color:");
        return ellipseRightColor;
    };
    GUI.prototype.getTwoColorsCircleInnerColor = function () {
        var innerColor;
        innerColor = prompt("Enter inner color:");
        return innerColor;
    };
    GUI.prototype.getTwoColorsCircleOuterColor = function () {
        var outerColor;
        outerColor = prompt("Enter outer color:");
        return outerColor;
    };
    return GUI;
}());
//# sourceMappingURL=GUI.js.map