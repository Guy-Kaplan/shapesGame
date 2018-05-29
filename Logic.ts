class Logic {

    public isSecondKeletTakin(num: number): boolean {
        if (num < 1 || num != Math.floor(num)) {
            return false;
        }
        return true;
    }

    public isThirdKeletTakin(num: number): boolean {
        if (num != 1 && num != 2 && num != 3 && num != 4) {
            return false;
        }
        return true;
    }

    public isIsoSecondKeletTakin(num: number): boolean {
        //if (num < 1 || num != Math.floor(num)) {
        if (num < 3 || num % 2 != 1 || num != Math.floor(num)) {
            return false;
        }
        return true;
    }

    public isEllipseSecondKeletTakin(num: number): boolean {
        //if (num < 1 || num != Math.floor(num)) {
        if (num < 1 || num > 20) {
            return false;
        }
        return true;
    }

    public isCircleSecondKeletTakin(num: number): boolean {
        if (num < 1 || num > 4) {
            return false;
        }
        return true;
    }



}