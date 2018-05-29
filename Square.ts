class Square extends Shape {

    private _size: number;

    public constructor(color: string = "---", size: number = 1) {
        super(color);
        this.size = size;
    }

    public set size(value: number) {
        if (value >= 1) {
            this._size = value;
        }
    }

    public get size(): number {
        return this._size;
    }
    //------------------Squares----------------------------------
    public drawFullSquare(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.size; i++) {
            this.drawLineOfKohaviot(this.size);
        }
        document.write(`</font>`);
    }

    public drawHaloolSquare(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.size; i++) {
            if (i == 1 || i == this.size) {
                this.drawLineOfKohaviot(this.size);
            }
            else {
                this.drawHaloolLineOfKohaviot(this.size);
            }
        }
        document.write(`</font>`);
    }

    public drawSquareOfNums(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.size; i++) {
            this.drawLineOfNums(this.size);
        }
        document.write(`</font>`);
    }

    public drawSquareOfReversedNums(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.size; i++) {
            this.drawReversedLineOfNums(this.size);
        }
        document.write(`</font>`);
    }

    public displayDetails(): void {
        super.displayDetails();
        let perimeter: number = (4 * this.size);
        let area: number = (this.size * this.size);
        document.write(`<u>Square's Size</u>: ${this.size}<br>`);
        document.write(`<u>Square's Perimeter</u>: ${perimeter}<br>`);
        document.write(`<u>Square's Area</u>: ${area}<br>`);
    }


}

