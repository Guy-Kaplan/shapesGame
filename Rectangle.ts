class Rectangle extends Shape {

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
    //------------------Rectangles----------------------------------
    public drawFullRect(): void { // 1
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.height; i++) {
            this.drawLineOfKohaviot(this.width);
        }
        document.write(`</font>`);
    }

    public drawHaloolRect(): void { // 2
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.height; i++) {
            if (i == 1 || i == this.height) {
                this.drawLineOfKohaviot(this.width);
            }
            else {
                this.drawHaloolLineOfKohaviot(this.width);
            }
        }
        document.write(`</font>`);
    }

    public drawRectOfNums(): void { // 3
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.height; i++) {
            this.drawLineOfNums(this.width);
        }
        document.write(`</font>`);
    }

    public drawRectOfReversedNums(): void { // 4
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.height; i++) {
            this.drawReversedLineOfNums(this.width);
        }
        document.write(`</font>`);
    }

    public drawColorRect(): void { // 5
        let newWidth: number = this.width * 10;
        let newHeight: number = this.height * 10;
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
        let perimeter: number = ((2 * this.width) + (2 * this.height));
        let area: number = (this.width * this.height);
        document.write(`<u>Rectangle's Width</u>: ${this.width}<br>`);
        document.write(`<u>Rectangle's Height</u>: ${this.height}<br>`);
        document.write(`<u>Rectangle's Perimeter</u>: ${perimeter}<br>`);
        document.write(`<u>Rectangle's Area</u>: ${area}<br>`);
    }
}

