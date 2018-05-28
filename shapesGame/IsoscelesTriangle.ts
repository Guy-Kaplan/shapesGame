class IsoscelesTriangle extends Shape {

    private _width: number;
    public height: number;

    public constructor(color: string = "---", width: number = 3) {
        super(color);
        this.width = width;
    }

    public set width(value: number) {
        if (value >= 3 && value % 2 == 1 && value == Math.floor(value)) {
            this._width = value;
        }
    }

    public get width(): number {
        return this._width;
    }
    //------------------IsoscelesTriangles----------------------------------
    public drawFullIso(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.width; i+=2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawLineOfKohaviot2(i);
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write(`</font>`);
    }

    public drawHaloolIso(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            if (i == 1 || i == this.width) {
                this.drawLineOfKohaviot2(i);
            }
            else {
                this.drawHaloolLineOfKohaviot2(i);
            }
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write(`</font>`);
    }

    public drawIsoOfNums(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawLineOfNums2(i);
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write(`</font>`);
    }

    public drawIsoOfReversedNums(): void {
        let i: number;
        let j: number;
        let k: number;
        document.write(`<font color=${this.color}>`);
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            for (k = i; k >= 1; k--) {
                document.write(k + "&nbsp;");
            }
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write(`</font>`);
    }

    public displayIsoDetails(): void {
        //super.displayDetails();
        this.height = Math.ceil(this.width / 2);
        let halfWidth: number = (this.width) / 2;
        let yeter: number = ((this.height * this.height) + (halfWidth * halfWidth)); // Pythagoras
        yeter = Math.sqrt(yeter); // Pythagoras
        let perimeter: number = (this.width + yeter + yeter);
        let area: number = ((this.height * this.width) / 2);
        document.write(`<br><u>Shape's Color</u>: ${this.color}<br>`);
        document.write(`<u>Isosceles Triangle's Width</u>: ${this.width}<br>`);
        document.write(`<u>Isosceles Triangle's Height</u>: ${this.height}<br>`);
        document.write(`<u>Isosceles Triangle's Yeter</u>: ${yeter}<br>`);
        document.write(`<u>Isosceles Triangle's Perimeter</u>: ${perimeter}<br>`);
        document.write(`<u>Isosceles Triangle's Area</u>: ${area}<br>`);
    }
}