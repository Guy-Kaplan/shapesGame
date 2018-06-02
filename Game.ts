class Game {

    private gui: GUI = new GUI();
    private logic: Logic = new Logic();
    private userShape: number;
    private userSquareSize: number;
    private userRectWidth: number;
    private userRectHeight: number;
    private userTriangleSize: number;
    private userParaWidth: number;
    private userParaHeight: number;
    //private userTrapWidth: number;
    private userTrapHeight: number;
    private userIsoWidth: number;
    private userDiamondWidth: number;
    private userCircleRadius: number;
    private userEllipseWidth: number;
    private userEllipseHeight: number;

    private userShapeContent: number;
    private shapeColor: string;
    private shapeColor2: string;

    public start(): void {


        this.gui.showChromeMsg();
        this.userShape = this.gui.getShape(); // first kelet
        while (this.logic.isFirstKeletWrong(this.userShape)) {
            this.gui.displayFirstKeletError();
            this.userShape = this.gui.getShape(); // first kelet
        }

        if (this.userShape == 1) { // Square
            this.userSquareSize = this.gui.getSquareSize(); // second kelet
            while (this.logic.isSecondKeletWrong(this.userSquareSize)) {
                this.gui.displaySecondKeletError();
                this.userSquareSize = this.gui.getSquareSize(); // second kelet
            }
            this.userShapeContent = this.gui.getShapeContent(); // third kelet
            while (this.logic.isThirdKeletWrong(this.userShapeContent)) {
                this.gui.displayThirdKeletError();
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
            }
            this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            while (this.logic.isFourthKeletWrong(this.shapeColor)) {
                this.gui.displayFourthKeletError();
                this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            }
            let userSquare: Square = new Square(this.shapeColor, this.userSquareSize);
                switch (this.userShapeContent) {
                    case 1:
                        userSquare.drawFullSquare();
                        userSquare.displayDetails();
                        break;
                    case 2:
                        userSquare.drawHaloolSquare();
                        userSquare.displayDetails();
                        break;
                    case 3:
                        userSquare.drawSquareOfNums();
                        userSquare.displayDetails();
                        break;
                    case 4:
                        userSquare.drawSquareOfReversedNums();
                        userSquare.displayDetails();
                    case 5:
                        userSquare.drawColorSquare();
                        userSquare.displayDetails();
                }
            

        }
        if (this.userShape == 2) { // Rectangle
            this.userRectWidth = this.gui.getRectWidth(); //second kelet 1
            while (this.logic.isSecondKeletWrong(this.userRectWidth)) {
                this.gui.displaySecondKeletError();
                this.userRectWidth = this.gui.getRectWidth(); //second kelet 1
            }
            this.userRectHeight = this.gui.getRectHeight(); //second kelet 2
            while (this.logic.isSecondKeletWrong(this.userRectHeight)) {
                this.gui.displaySecondKeletError();
                this.userRectHeight = this.gui.getRectHeight(); //second kelet 2
            }
            this.userShapeContent = this.gui.getShapeContent(); // third kelet
            while (this.logic.isThirdKeletWrong(this.userShapeContent)) {
                this.gui.displayThirdKeletError();
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
            }
            this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            while (this.logic.isFourthKeletWrong(this.shapeColor)) {
                this.gui.displayFourthKeletError();
                this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            }
            let userRectangle: Rectangle = new Rectangle(this.shapeColor, this.userRectWidth, this.userRectHeight);
                switch (this.userShapeContent) {
                    case 1:
                        userRectangle.drawFullRect();
                        userRectangle.displayDetails();
                        break;
                    case 2:
                        userRectangle.drawHaloolRect();
                        userRectangle.displayDetails();
                        break;
                    case 3:
                        userRectangle.drawRectOfNums();
                        userRectangle.displayDetails();
                        break;
                    case 4:
                        userRectangle.drawRectOfReversedNums();
                        userRectangle.displayDetails();
                        break;
                    case 5:
                        userRectangle.drawColorRect();
                        userRectangle.displayDetails();
                }
            
        }
        if (this.userShape == 3) { // Triangle
            this.userTriangleSize = this.gui.getTriangleSize(); //second kelet
            while (this.logic.isSecondKeletWrong(this.userTriangleSize)) {
                this.gui.displaySecondKeletError();
                this.userTriangleSize = this.gui.getTriangleSize(); //second kelet
            }
            this.userShapeContent = this.gui.getShapeContent(); // third kelet
            while (this.logic.isThirdKeletWrong(this.userShapeContent)) {
                this.gui.displayThirdKeletError();
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
            }
            this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            while (this.logic.isFourthKeletWrong(this.shapeColor)) {
                this.gui.displayFourthKeletError();
                this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            }
            let userTriangle: RightTriangle = new RightTriangle(this.shapeColor, this.userTriangleSize);
                switch (this.userShapeContent) {
                    case 1:
                        userTriangle.drawFullTriangle();
                        userTriangle.displayDetails();
                        break;
                    case 2:
                        userTriangle.drawHaloolTriangle();
                        userTriangle.displayDetails();
                        break;
                    case 3:
                        userTriangle.drawTriangleOfNums();
                        userTriangle.displayDetails();
                        break;
                    case 4:
                        userTriangle.drawTriangleOfReversedNums();
                        userTriangle.displayDetails();
                    case 5:
                        userTriangle.drawFullTriangle(); //+++
                        userTriangle.displayDetails();
                }
            
        }
        if (this.userShape == 4) { // Parallelogram
            this.userParaWidth = this.gui.getParaWidth(); //second kelet 1
            while (this.logic.isSecondKeletWrong(this.userParaWidth)) {
                this.gui.displaySecondKeletError();
                this.userParaWidth = this.gui.getParaWidth(); //second kelet 1
            }
            this.userParaHeight = this.gui.getParaHeight(); //second kelet 2
            while (this.logic.isSecondKeletWrong(this.userParaHeight)) {
                this.gui.displaySecondKeletError();
                this.userParaHeight = this.gui.getParaHeight(); //second kelet 2
            }
            this.userShapeContent = this.gui.getShapeContent(); // third kelet
            while (this.logic.isThirdKeletWrong(this.userShapeContent)) {
                this.gui.displayThirdKeletError();
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
            }
            this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            while (this.logic.isFourthKeletWrong(this.shapeColor)) {
                this.gui.displayFourthKeletError();
                this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            }
            let userParallelogram: Parallelogram = new Parallelogram(this.shapeColor, this.userParaWidth, this.userParaHeight);
                switch (this.userShapeContent) {
                    case 1:
                        userParallelogram.drawFullPara();
                        userParallelogram.displayDetails();
                        break;
                    case 2:
                        userParallelogram.drawHaloolPara();
                        userParallelogram.displayDetails();
                        break;
                    case 3:
                        userParallelogram.drawParaOfNums();
                        userParallelogram.displayDetails();
                        break;
                    case 4:
                        userParallelogram.drawParaOfReversedNums();
                        userParallelogram.displayDetails();
                    case 5:
                        userParallelogram.drawFullPara(); //+++
                        userParallelogram.displayDetails();
                }
            
        }
        if (this.userShape == 5) { // Trapezoid
            this.userTrapHeight = this.gui.getTrapHeight(); //second kelet
            while (this.logic.isSecondKeletWrong(this.userTrapHeight)) {
                this.gui.displaySecondKeletError();
                this.userTrapHeight = this.gui.getTrapHeight(); //second kelet
            }
            this.userShapeContent = this.gui.getShapeContent(); // third kelet
            while (this.logic.isThirdKeletWrong(this.userShapeContent)) {
                this.gui.displayThirdKeletError();
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
            }
            this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            while (this.logic.isFourthKeletWrong(this.shapeColor)) {
                this.gui.displayFourthKeletError();
                this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            }
            let userTrapezoid: RightTrapezoid = new RightTrapezoid(this.shapeColor, this.userTrapHeight);
                switch (this.userShapeContent) {
                    case 1:
                        userTrapezoid.drawFullTrap();
                        userTrapezoid.displayDetails();
                        break;
                    case 2:
                        userTrapezoid.drawHaloolTrap();
                        userTrapezoid.displayDetails();
                        break;
                    case 3:
                        userTrapezoid.drawTrapOfNums();
                        userTrapezoid.displayDetails();
                        break;
                    case 4:
                        userTrapezoid.drawTrapOfReversedNums();
                        userTrapezoid.displayDetails();
                    case 5:
                        userTrapezoid.drawFullTrap(); //+++
                        userTrapezoid.displayDetails();
                }
            
        }
        if (this.userShape == 6) { // Isosceles Triangle
            this.userIsoWidth = this.gui.getIsoWidth(); //second kelet
            while (this.logic.isIsoSecondKeletWrong(this.userIsoWidth)) {
                this.gui.displayIsoSecondKeletError();
                this.userIsoWidth = this.gui.getIsoWidth(); //second kelet
            }
            this.userShapeContent = this.gui.getShapeContent(); // third kelet
            while (this.logic.isThirdKeletWrong(this.userShapeContent)) {
                this.gui.displayThirdKeletError();
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
            }
            this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            while (this.logic.isFourthKeletWrong(this.shapeColor)) {
                this.gui.displayFourthKeletError();
                this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            }
            let userIsoscelesTriangle: IsoscelesTriangle = new IsoscelesTriangle(this.shapeColor, this.userIsoWidth);
                switch (this.userShapeContent) {
                    case 1:
                        userIsoscelesTriangle.drawFullIso();
                        userIsoscelesTriangle.displayIsoDetails();
                        break;
                    case 2:
                        userIsoscelesTriangle.drawHaloolIso();
                        userIsoscelesTriangle.displayIsoDetails();
                        break;
                    case 3:
                        userIsoscelesTriangle.drawIsoOfNums();
                        userIsoscelesTriangle.displayIsoDetails();
                        break;
                    case 4:
                        userIsoscelesTriangle.drawIsoOfReversedNums();
                        userIsoscelesTriangle.displayIsoDetails();
                    case 5:
                        userIsoscelesTriangle.drawFullIso(); //+++
                        userIsoscelesTriangle.displayIsoDetails();
                }
            
        }
        if (this.userShape == 7) { // Diamond
            this.userDiamondWidth = this.gui.getDiamondWidth(); //second kelet
            while (this.logic.isIsoSecondKeletWrong(this.userDiamondWidth)) {
                this.gui.displayIsoSecondKeletError();
                this.userDiamondWidth = this.gui.getDiamondWidth(); //second kelet
            }
            this.userShapeContent = this.gui.getShapeContent(); // third kelet
            while (this.logic.isThirdKeletWrong(this.userShapeContent)) {
                this.gui.displayThirdKeletError();
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
            }
            this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            while (this.logic.isFourthKeletWrong(this.shapeColor)) {
                this.gui.displayFourthKeletError();
                this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            }
            let userDiamond: Diamond = new Diamond(this.shapeColor, this.userDiamondWidth);
                switch (this.userShapeContent) {
                    case 1:
                        userDiamond.drawFullDiamond();
                        userDiamond.displayDiamondDetails();
                        break;
                    case 2:
                        userDiamond.drawHaloolDiamond();
                        userDiamond.displayDiamondDetails();
                        break;
                    case 3:
                        userDiamond.drawDiamondOfNums();
                        userDiamond.displayDiamondDetails();
                        break;
                    case 4:
                        userDiamond.drawDiamondOfReversedNums();
                        userDiamond.displayDiamondDetails();
                    case 5:
                        userDiamond.drawFullDiamond(); //+++
                        userDiamond.displayDiamondDetails();
                }
            
        }
        if (this.userShape == 8) { // Rainbow Rectangle
            this.userRectWidth = this.gui.getRectWidth(); //second kelet 1
            while (this.logic.isSecondKeletWrong(this.userRectWidth)) {
                this.gui.displaySecondKeletError();
                this.userRectWidth = this.gui.getRectWidth(); //second kelet 1
            }
            this.userRectHeight = this.gui.getRectHeight(); //second kelet 2
            while (this.logic.isSecondKeletWrong(this.userRectHeight)) {
                this.gui.displaySecondKeletError();
                this.userRectHeight = this.gui.getRectHeight(); //second kelet 2
            }
            let userRainbowRectangle: RainbowRectangle = new RainbowRectangle("Rainbow", this.userRectWidth, this.userRectHeight);
            userRainbowRectangle.drawRainbowRectangle();
            userRainbowRectangle.displayDetails();

            
        }
        if (this.userShape == 9) { // Circle
            this.userCircleRadius = this.gui.getCircleRadius(); //second kelet
            while (this.logic.isCircleSecondKeletWrong(this.userCircleRadius)) {
                this.gui.displayCircleSecondKeletError();
                this.userCircleRadius = this.gui.getCircleRadius(); //second kelet
            }
            this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            while (this.logic.isFourthKeletWrong(this.shapeColor)) {
                this.gui.displayFourthKeletError();
                this.shapeColor = this.gui.getShapeColor(); // fourth kelet
            }
            let userCircle: Circle = new Circle(this.shapeColor, this.userCircleRadius);
            userCircle.drawCircle();
            userCircle.displayDetails();
            
        }
        if (this.userShape == 10) { // Ellipse (Gradient Ellipse)
            this.userEllipseWidth = this.gui.getEllipseWidth(); //second kelet 1
            while (this.logic.isEllipseSecondKeletWrong(this.userEllipseWidth)) {
                this.gui.displayEllipseSecondKeletError();
                this.userEllipseWidth = this.gui.getEllipseWidth(); //second kelet 1
            }
            this.userEllipseHeight = this.gui.getEllipseHeight(); //second kelet 2
            while (this.logic.isEllipseSecondKeletWrong(this.userEllipseHeight)) {
                this.gui.displayEllipseSecondKeletError();
                this.userEllipseHeight = this.gui.getEllipseHeight(); //second kelet 2
            }
            this.shapeColor = this.gui.getEllipseLeftColor(); // fourth kelet 1
            while (this.logic.isFourthKeletWrong(this.shapeColor)) {
                this.gui.displayFourthKeletError();
                this.shapeColor = this.gui.getEllipseLeftColor(); // fourth kelet 1
            }
            this.shapeColor2 = this.gui.getEllipseRightColor(); // fourth kelet 2
            while (this.logic.isFourthKeletWrong(this.shapeColor2)) {
                this.gui.displayFourthKeletError();
                this.shapeColor2 = this.gui.getEllipseRightColor(); // fourth kelet 2
            }
            let userEllipse: Ellipse = new Ellipse(this.shapeColor, this.shapeColor2, this.userEllipseWidth, this.userEllipseHeight);
            userEllipse.drawEllipse();
            userEllipse.displayDetails();
        }
        if (this.userShape == 11) { // Two Colors Circle
            this.userCircleRadius = this.gui.getCircleRadius(); //second kelet
            while (this.logic.isCircleSecondKeletWrong(this.userCircleRadius)) {
                this.gui.displayCircleSecondKeletError();
                this.userCircleRadius = this.gui.getCircleRadius(); //second kelet
            }
            this.shapeColor = this.gui.getTwoColorsCircleInnerColor(); // fourth kelet 1
            while (this.logic.isFourthKeletWrong(this.shapeColor)) {
                this.gui.displayFourthKeletError();
                this.shapeColor = this.gui.getEllipseLeftColor(); // fourth kelet 1
            }
            this.shapeColor2 = this.gui.getTwoColorsCircleOuterColor(); // fourth kelet 2
            while (this.logic.isFourthKeletWrong(this.shapeColor2)) {
                this.gui.displayFourthKeletError();
                this.shapeColor2 = this.gui.getEllipseRightColor(); // fourth kelet 2
            }
            let userTwoColorsCircle: TwoColorsCircle = new TwoColorsCircle(this.shapeColor, this.userCircleRadius, this.shapeColor2);
            userTwoColorsCircle.drawTwoColorsCircle();
            userTwoColorsCircle.displayDetails();
        }


    }


}
