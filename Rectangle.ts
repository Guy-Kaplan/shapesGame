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
    public drawFullRect(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.height; i++) {
            this.drawLineOfKohaviot(this.width);
        }
        document.write(`</font>`);
    }

    public drawHaloolRect(): void {
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

    public drawRectOfNums(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.height; i++) {
            this.drawLineOfNums(this.width);
        }
        document.write(`</font>`);
    }

    public drawRectOfReversedNums(): void {
        let i: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.height; i++) {
            this.drawReversedLineOfNums(this.width);
        }
        document.write(`</font>`);
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

