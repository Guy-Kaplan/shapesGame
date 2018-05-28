class RightTriangle extends Shape {

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
    //------------------RightTriangle----------------------------------
    public drawFullTriangle(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.size; i++) {
            this.drawLineOfKohaviot(i);
        }
        document.write(`</font>`);
    }

    public drawHaloolTriangle(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.size; i++) {
            if (i == 1 || i == this.size) {
                this.drawLineOfKohaviot(i);
            }
            else {
                this.drawHaloolLineOfKohaviot(i);
            }
        }
        document.write(`</font>`);
    }

    public drawTriangleOfNums(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.size; i++) {
            this.drawLineOfNums(i);
        }
        document.write(`</font>`);
    }

    public drawTriangleOfReversedNums(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        for (i = this.size; i >= 1; i--) {
            for (j = this.size; j >= i; j--) {
                document.write(j + "&nbsp;");
            }
            document.write("<br>");
        }
        document.write(`</font>`);
    }

    public displayDetails(): void {
        super.displayDetails();
        let yeter: number = ((this.size * this.size) + (this.size * this.size)); // Pythagoras
        yeter = Math.sqrt(yeter); // Pythagoras
        let perimeter: number = (this.size + this.size + yeter);
        let area: number = ((this.size * this.size) / 2);
        document.write(`<u>Triangle's Size</u>: ${this.size}<br>`);
        document.write(`<u>Triangle's Yeter</u>: ${yeter}<br>`);
        document.write(`<u>Triangle's Perimeter</u>: ${perimeter}<br>`);
        document.write(`<u>Triangle's Area</u>: ${area}<br>`);
    }
}