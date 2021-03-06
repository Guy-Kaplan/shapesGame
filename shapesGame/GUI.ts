class GUI {

    public showChromeMsg(): void {
        alert("This game was built for Google Chrome");
    }

    public displayFirstKeletError() {
        alert("Error 1: Select 1-11 ONLY, for the wanted shape");
    }

    public displaySecondKeletError() {
        alert("Error 2: Enter a positive integer number ONLY");
    }

    public displayThirdKeletError() {
        alert("Error 3: Select 1-5 ONLY");
    }

    public displayFourthKeletError() {
        alert("Error 4: Select a color");
    }

    public displayIsoSecondKeletError() {
        alert("Error 5: Enter a positive, greater than 3 and odd integer number ONLY");
    }

    public displayEllipseSecondKeletError() {
        alert("Error 6: Select 1-20 ONLY");
    }

    public displayCircleSecondKeletError() {
        alert("Error 7: Select 1-4 ONLY, for the radius");
    }

    public getShape(): number { // first kelet
        let shape: number;
        shape = Number(prompt(`Welcome to Shapes Game.
We will draw here a shape designed by your choices.
Have fun :)
Select wanted shape:
1) Square
2) Rectangle
3) Right Triangle
4) Parallelogram
5) Right Trapezoid
6) Isosceles Triangle
7) Diamond
8) Rainbow Rectangle
9) Circle
10) Gradient Ellipse
11) Two Colors Circle`));
        return shape;
    }

    public getSquareSize(): number { // second kelet
        let squareSize: number;
        squareSize = Number(prompt(`Enter square side length:`));
        return squareSize;
    }


    public getRectWidth(): number { // second kelet
        let rectWidth: number;
        rectWidth = Number(prompt(`Enter rectangle width:`));
        return rectWidth;
    }

    public getRectHeight(): number { // second kelet
        let rectHeight: number;
        rectHeight = Number(prompt(`Enter rectangle height:`));
        return rectHeight;
    }

    public getTriangleSize(): number { // second kelet
        let triangleSize: number;
        triangleSize = Number(prompt(`Enter triangle side length:`));
        return triangleSize;
    }

    public getParaWidth(): number { // second kelet
        let paraWidth: number;
        paraWidth = Number(prompt(`Enter parallelogram width:`));
        return paraWidth;
    }

    public getParaHeight(): number { // second kelet
        let paraHeight: number;
        paraHeight = Number(prompt(`Enter parallelogram height:`));
        return paraHeight;
    }

    public getTrapWidth(): number { // second kelet
        let trapWidth: number;
        trapWidth = Number(prompt(`Enter trapezoid width:`));
        return trapWidth;
    }

    public getTrapHeight(): number { // second kelet
        let trapHeight: number;
        trapHeight = Number(prompt(`Enter trapezoid height:`));
        return trapHeight;
    }

    public getIsoWidth(): number { // second kelet
        let isoWidth: number;
        isoWidth = Number(prompt(`Enter isosceles triangle width:
(MUST BE 3 or more, whole and odd number)`));
        return isoWidth;
    }

    public getDiamondWidth(): number { // second kelet
        let diamondWidth: number;
        diamondWidth = Number(prompt(`Enter diamond width:
(MUST BE 3 or more, whole and odd number)`));
        return diamondWidth;
    }

    public getCircleRadius(): number { // second kelet
        let circleRadius: number;
        circleRadius = Number(prompt(`Enter circle radius (1-4 ONLY):`));
        return circleRadius;
    }

    public getEllipseWidth(): number { // second kelet
        let ellipseWidth: number;
        ellipseWidth = Number(prompt(`Enter ellipse width (1-20 ONLY):`));
        return ellipseWidth;
    }

    public getEllipseHeight(): number { // second kelet
        let ellipseHeight: number;
        ellipseHeight = Number(prompt(`Enter ellipse height (1-20 ONLY):`));
        return ellipseHeight;
    }

    public getShapeContent(): number { // third kelet
        let shapeContent: number;
        shapeContent = Number(prompt(`Select shape style:
1) *****
2) *   *
3) 12345
4) 54321
5) color`));
        return shapeContent;
    }

    public getShapeColor(): string { // fourth kelet
        let shapeColor: string;
        shapeColor = prompt("Enter a color for your shape:");
        return shapeColor;
    }

    public getEllipseLeftColor(): string { // fourth kelet
        let ellipseLeftColor: string;
        ellipseLeftColor = prompt("Enter ellipse left color:");
        return ellipseLeftColor;
    }

    public getEllipseRightColor(): string { // fourth kelet
        let ellipseRightColor: string;
        ellipseRightColor = prompt("Enter ellipse right color:");
        return ellipseRightColor;
    }

    public getTwoColorsCircleInnerColor(): string { // fourth kelet
        let innerColor: string;
        innerColor = prompt("Enter inner color:");
        return innerColor;
    }

    public getTwoColorsCircleOuterColor(): string { // fourth kelet
        let outerColor: string;
        outerColor = prompt("Enter outer color:");
        return outerColor;
    }



}
