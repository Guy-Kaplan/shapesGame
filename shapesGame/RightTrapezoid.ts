class RightTrapezoid extends Shape {

    //private _width: number;
    private _height: number;

    public constructor(color: string = "---", height: number = 1) {
        super(color);
        //this.width = width;
        this.height = height;

    }

    public set height(value: number) {
        if (value >= 1) {
            this._height = value;
        }
    }

    public get height(): number {
        return this._height;
    }
    //------------------RightTrapezoid----------------------------------
    public drawFullTrap(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 0; i < this.height; i++) {
            this.drawLineOfKohaviot(this.height + i);
        }
        document.write(`</font>`);
    }

    public drawHaloolTrap(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 0; i < this.height; i++) {
            if (i == 0 || i == this.height - 1) {
                this.drawLineOfKohaviot(this.height + i);
            }
            else {
                this.drawHaloolLineOfKohaviot(this.height + i);
            }
        }
        document.write(`</font>`);
    }

    public drawTrapOfNums(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 0; i < this.height; i++) {
            this.drawLineOfNums(this.height + i);
        }
        document.write(`</font>`);
    }

    public drawTrapOfReversedNums(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 0; i < this.height; i++) {
            this.drawReversedLineOfNums(this.height + i);
        }
        document.write(`</font>`);
    }

    public displayDetails(): void {
        super.displayDetails();
        let width = (this.height) + (this.height - 1);
        let katan = width - this.height;
        let yeter: number = ((this.height * this.height) + (katan * katan)); // Pythagoras
        yeter = Math.sqrt(yeter); // Pythagoras
        let areaOfTriangle: number = ((this.height * katan) / 2);
        let areaOfSquare: number = (this.height * this.height);
        let perimeter: number = (this.height * 2) + width + yeter;
        let area: number = areaOfTriangle + areaOfSquare;
        document.write(`<u>Trapezoid's Height</u>: ${this.height}<br>`);
        document.write(`<u>Trapezoid's Width</u>: ${width}<br>`);
        document.write(`<u>Trapezoid's Yeter</u>: ${yeter}<br>`);
        document.write(`<u>Trapezoid's Perimeter</u>: ${perimeter}<br>`);
        document.write(`<u>Trapezoid's Area</u>: ${area}<br>`);
    }
}