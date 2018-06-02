class Logic {

    public isFirstKeletWrong(num: number): boolean {
        if (num != 1 && num != 2 && num != 3 && num != 4 && num != 5 && num != 6 && num != 7 && num != 8 && num != 9 && num != 10 && num != 11) {
            return true;
        }
        return false;
    }

    public isSecondKeletWrong(num: number): boolean {
        if (num < 1 || num != Math.floor(num)) {
            return true;
        }
        return false;
    }

    public isThirdKeletWrong(num: number): boolean {
        if (num != 1 && num != 2 && num != 3 && num != 4 && num != 5) {
            return true;
        }
        return false;
    }

    public isFourthKeletWrong(shapeColor: string): boolean {
        if (shapeColor === "") {
            return true;
        }
        return false;
    }

    public isIsoSecondKeletWrong(num: number): boolean {
        if (num < 3 || num % 2 != 1 || num != Math.floor(num)) {
            return true;
        }
        return false;
    }

    public isEllipseSecondKeletWrong(num: number): boolean {
        if (num < 1 || num > 20 || isNaN(num) === true) {
            return true;
        }
        return false;
    }

    public isCircleSecondKeletWrong(num: number): boolean {
        if (num < 1 || num > 4 || isNaN(num) === true) {
            return true;
        }
        return false;
    }



}
