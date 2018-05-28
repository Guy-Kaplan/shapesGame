class Parallelogram extends Shape {

    private _width: number;
    private _height: number;

    public constructor(color: string = "---", width: number = 1, height: number = 1) {
        super(color);
        this.width = width;
        this.height = height;

    }

    public set width(value: number) {
        if (value >= 1) {
            this._width = value;
        }
    }

    public get width(): number {
        return this._width;
    }

    public set height(value: number) {
        if (value >= 1) {
            this._height = value;
        }
    }

    public get height(): number {
        return this._height;
    }
    //------------------Parallelograms----------------------------------
    public drawFullPara(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        for (i = this.height - 1; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                document.write("&nbsp;");
            }
            this.drawLineOfKohaviot(this.width);
        }
        document.write(`</font>`);
    }

    public drawHaloolPara(): void {
        let i: number;
        let j: number;
            document.write(`<font color=${this.color}>`);
            for (i = this.height - 1; i >= 0; i--) {
                for (j = 0; j <= i; j++) {
                    document.write("&nbsp;");
                }
                if (i == this.height - 1 || i == 0) {
                    this.drawLineOfKohaviot(this.width);
                }
                else {
                    this.drawHaloolLineOfKohaviot(this.width);
                }
            }
        document.write(`</font>`);
    }

    public drawParaOfNums(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        for (i = this.height - 1; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                document.write("&nbsp;");
            }
            this.drawLineOfNums(this.width);
        }
        document.write(`</font>`);
    }

    public drawParaOfReversedNums(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        for (i = this.height - 1; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                document.write("&nbsp;");
            }
            this.drawReversedLineOfNums(this.width);
        }
        document.write(`</font>`);
    }

    public displayDetails(): void {
        super.displayDetails();
        //let perimeter: number = ((2 * width) + (2 * height));
        let area: number = (this.width * this.height);
        //document.write(`<u>Parallelogram's Perimeter</u>: ${perimeter}<br>`);
        document.write(`<u>Parallelogram's width</u>: ${this.width}<br>`);
        document.write(`<u>Parallelogram's height</u>: ${this.height}<br>`);
        document.write(`<u>Parallelogram's Area</u>: ${area}<br>`);
    }
}