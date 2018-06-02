var GUI = /** @class */ (function () {
    function GUI() {
    }
    GUI.prototype.showChromeMsg = function () {
        alert("This game was built for Google Chrome");
    };
    GUI.prototype.displayFirstKeletError = function () {
        alert("Error 1: Select 1-11 ONLY, for the wanted shape");
    };
    GUI.prototype.displaySecondKeletError = function () {
        alert("Error 2: Enter a positive integer number ONLY");
    };
    GUI.prototype.displayThirdKeletError = function () {
        alert("Error 3: Select 1-5 ONLY");
    };
    GUI.prototype.displayFourthKeletError = function () {
        alert("Error 4: Select a color");
    };
    GUI.prototype.displayIsoSecondKeletError = function () {
        alert("Error 5: Enter a positive, greater than 3 and odd integer number ONLY");
    };
    GUI.prototype.displayEllipseSecondKeletError = function () {
        alert("Error 6: Select 1-20 ONLY");
    };
    GUI.prototype.displayCircleSecondKeletError = function () {
        alert("Error 7: Select 1-4 ONLY, for the radius");
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
        shapeContent = Number(prompt("Select shape style:\n1) *****\n2) *   *\n3) 12345\n4) 54321\n5) color"));
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
