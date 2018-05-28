var Game = /** @class */ (function () {
    function Game() {
        this.gui = new GUI();
        this.logic = new Logic();
    }
    Game.prototype.start = function () {
        this.gui.showChromeMsg();
        this.userShape = this.gui.getShape(); // first kelet
        this.gui.checkFirstKelet(this.userShape);
        if (this.userShape == 1) {
            this.userSquareSize = this.gui.getSquareSize(); // second kelet
            this.gui.checkSecondKelet(this.userSquareSize);
            if (this.logic.isSecondKeletTakin(this.userSquareSize)) {
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
                this.gui.checkThirdKelet(this.userShapeContent);
                if (this.logic.isThirdKeletTakin(this.userShapeContent)) {
                    this.shapeColor = this.gui.getShapeColor(); // fourth kelet
                }
                var userSquare = new Square(this.shapeColor, this.userSquareSize);
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
                }
            }
        }
        if (this.userShape == 2) {
            this.userRectWidth = this.gui.getRectWidth(); //second kelet
            this.gui.checkSecondKelet(this.userRectWidth);
            if (this.logic.isSecondKeletTakin(this.userRectWidth)) {
                this.userRectHeight = this.gui.getRectHeight(); //second kelet
                this.gui.checkSecondKelet(this.userRectHeight);
            }
            if (this.logic.isSecondKeletTakin(this.userRectWidth) && this.logic.isSecondKeletTakin(this.userRectHeight)) {
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
                this.gui.checkThirdKelet(this.userShapeContent);
                if (this.logic.isThirdKeletTakin(this.userShapeContent)) {
                    this.shapeColor = this.gui.getShapeColor(); // fourth kelet
                }
                var userRectangle = new Rectangle(this.shapeColor, this.userRectWidth, this.userRectHeight);
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
                }
            }
        }
        if (this.userShape == 3) {
            this.userTriangleSize = this.gui.getTriangleSize(); //second kelet
            this.gui.checkSecondKelet(this.userTriangleSize);
            if (this.logic.isSecondKeletTakin(this.userTriangleSize)) {
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
                this.gui.checkThirdKelet(this.userShapeContent);
                if (this.logic.isThirdKeletTakin(this.userShapeContent)) {
                    this.shapeColor = this.gui.getShapeColor(); // fourth kelet
                }
                var userTriangle = new RightTriangle(this.shapeColor, this.userTriangleSize);
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
                }
            }
        }
        if (this.userShape == 4) {
            this.userParaWidth = this.gui.getParaWidth(); //second kelet
            this.gui.checkSecondKelet(this.userParaWidth);
            if (this.logic.isSecondKeletTakin(this.userParaWidth)) {
                this.userParaHeight = this.gui.getParaHeight(); //second kelet
                this.gui.checkSecondKelet(this.userParaHeight);
            }
            if (this.logic.isSecondKeletTakin(this.userParaWidth) && this.logic.isSecondKeletTakin(this.userParaHeight)) {
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
                this.gui.checkThirdKelet(this.userShapeContent);
                if (this.logic.isThirdKeletTakin(this.userShapeContent)) {
                    this.shapeColor = this.gui.getShapeColor(); // fourth kelet
                }
                var userParallelogram = new Parallelogram(this.shapeColor, this.userParaWidth, this.userParaHeight);
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
                }
            }
        }
        if (this.userShape == 5) {
            //userTrapWidth = getTrapWidth(); //second kelet
            //checkSecondKelet(userTrapWidth);
            this.userTrapHeight = this.gui.getTrapHeight(); //second kelet
            this.gui.checkSecondKelet(this.userTrapHeight);
            if (this.logic.isSecondKeletTakin(this.userTrapHeight)) {
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
                this.gui.checkThirdKelet(this.userShapeContent);
                if (this.logic.isThirdKeletTakin(this.userShapeContent)) {
                    this.shapeColor = this.gui.getShapeColor(); // fourth kelet
                }
                var userTrapezoid = new RightTrapezoid(this.shapeColor, this.userTrapHeight);
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
                }
            }
        }
        if (this.userShape == 6) {
            this.userIsoWidth = this.gui.getIsoWidth(); //second kelet
            this.gui.checkIsoSecondKelet(this.userIsoWidth);
            //userParaHeight = getIsoHeight(); //second kelet
            //checkSecondKelet(userParaHeight);
            if (this.logic.isIsoSecondKeletTakin(this.userIsoWidth)) {
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
                this.gui.checkThirdKelet(this.userShapeContent);
                if (this.logic.isThirdKeletTakin(this.userShapeContent)) {
                    this.shapeColor = this.gui.getShapeColor(); // fourth kelet
                }
                var userIsoscelesTriangle = new IsoscelesTriangle(this.shapeColor, this.userIsoWidth);
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
                }
            }
        }
        if (this.userShape == 7) {
            this.userDiamondWidth = this.gui.getDiamondWidth(); //second kelet
            this.gui.checkIsoSecondKelet(this.userDiamondWidth);
            //userParaHeight = getIsoHeight(); //second kelet
            //checkSecondKelet(userParaHeight);
            if (this.logic.isIsoSecondKeletTakin(this.userDiamondWidth)) {
                this.userShapeContent = this.gui.getShapeContent(); // third kelet
                this.gui.checkThirdKelet(this.userShapeContent);
                if (this.logic.isThirdKeletTakin(this.userShapeContent)) {
                    this.shapeColor = this.gui.getShapeColor(); // fourth kelet
                }
                var userDiamond = new Diamond(this.shapeColor, this.userDiamondWidth);
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
                }
            }
        }
        if (this.userShape == 8) {
            this.userRectWidth = this.gui.getRectWidth(); //second kelet
            this.gui.checkSecondKelet(this.userRectWidth);
            if (this.logic.isSecondKeletTakin(this.userRectWidth)) {
                this.userRectHeight = this.gui.getRectHeight(); //second kelet
                this.gui.checkSecondKelet(this.userRectHeight);
            }
            if (this.logic.isSecondKeletTakin(this.userRectWidth) && this.logic.isSecondKeletTakin(this.userRectHeight)) {
                //userShapeContent = getShapeContent(); // third kelet
                //checkThirdKelet(userShapeContent);
                //if (isThirdKeletTakin(userShapeContent)) {
                //shapeColor = getShapeColor(); // fourth kelet
                //}
                var userRainbowRectangle = new RainbowRectangle("Rainbow", this.userRectWidth, this.userRectHeight);
                userRainbowRectangle.drawRainbowRectangle();
                userRainbowRectangle.displayDetails();
            }
        }
        if (this.userShape == 9) {
            this.userCircleRadius = this.gui.getCircleRadius(); //second kelet
            this.gui.checkCircleSecondKelet(this.userCircleRadius);
            if (this.logic.isCircleSecondKeletTakin(this.userCircleRadius)) {
                //userShapeContent = getShapeContent(); // third kelet
                //checkThirdKelet(userShapeContent);
                //if (isThirdKeletTakin(userShapeContent)) {
                this.shapeColor = this.gui.getShapeColor(); // fourth kelet
                //}
                var userCircle = new Circle(this.shapeColor, this.userCircleRadius);
                userCircle.drawCircle();
                userCircle.displayDetails();
            }
        }
        if (this.userShape == 10) {
            this.userEllipseWidth = this.gui.getEllipseWidth(); //second kelet
            this.gui.checkEllipseSecondKelet(this.userEllipseWidth);
            if (this.logic.isEllipseSecondKeletTakin(this.userEllipseWidth)) {
                this.userEllipseHeight = this.gui.getEllipseHeight(); //second kelet
                this.gui.checkEllipseSecondKelet(this.userEllipseHeight);
            }
            if (this.logic.isEllipseSecondKeletTakin(this.userEllipseWidth) && this.logic.isEllipseSecondKeletTakin(this.userEllipseHeight)) {
                //userShapeContent = getShapeContent(); // third kelet
                //checkThirdKelet(userShapeContent);
                //if (isThirdKeletTakin(userShapeContent)) {
                this.shapeColor = this.gui.getEllipseLeftColor(); // fourth kelet
                this.shapeColor2 = this.gui.getEllipseRightColor(); // fourth kelet
                //}
                var userEllipse = new Ellipse(this.shapeColor, this.shapeColor2, this.userEllipseWidth, this.userEllipseHeight);
                userEllipse.drawEllipse();
                userEllipse.displayDetails();
            }
        }
        if (this.userShape == 11) {
            this.userCircleRadius = this.gui.getCircleRadius(); //second kelet
            this.gui.checkCircleSecondKelet(this.userCircleRadius);
            if (this.logic.isCircleSecondKeletTakin(this.userCircleRadius)) {
                //userShapeContent = getShapeContent(); // third kelet
                //checkThirdKelet(userShapeContent);
                //if (isThirdKeletTakin(userShapeContent)) {
                this.shapeColor = this.gui.getTwoColorsCircleInnerColor(); // fourth kelet
                this.shapeColor2 = this.gui.getTwoColorsCircleOuterColor(); // fourth kelet
                //}
                var userTwoColorsCircle = new TwoColorsCircle(this.shapeColor, this.userCircleRadius, this.shapeColor2);
                userTwoColorsCircle.drawTwoColorsCircle();
                userTwoColorsCircle.displayDetails();
            }
        }
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map