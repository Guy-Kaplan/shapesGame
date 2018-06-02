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
    public drawFullSquare(): void { // 1
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.size; i++) {
            this.drawLineOfKohaviot(this.size);
        }
        document.write(`</font>`);
    }

    public drawHaloolSquare(): void { // 2
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

    public drawSquareOfNums(): void { // 3
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.size; i++) {
            this.drawLineOfNums(this.size);
        }
        document.write(`</font>`);
    }

    public drawSquareOfReversedNums(): void { // 4
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.size; i++) {
            this.drawReversedLineOfNums(this.size);
        }
        document.write(`</font>`);
    }

    public drawColorSquare(): void { // 5
        let newWidth: number = this.size * 10;
        let newHeight: number = this.size * 10;
        document.write(`<canvas id='myCanvas' width='${newWidth}' height='${newHeight}'>`); //style='border:1px solid #d3d3d3;'
        document.write("Your browser does not support the HTML5 canvas tag.</canvas>");
        var c = document.getElementById("myCanvas");
        var ctx = (<HTMLCanvasElement>c).getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, newWidth, newHeight);

        document.write("<br><br>");
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

