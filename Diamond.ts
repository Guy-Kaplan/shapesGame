class Diamond extends Shape {

    private _width: number; // In a diamond: width=height
    //public height: number;

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
    //------------------Diamonds----------------------------------
    public drawFullDiamond(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        //upper triangle
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawLineOfKohaviot2(i);
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        //bottom triangle
        for (i = (this.width-2); i >= 1; i -= 2) {
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

    public drawHaloolDiamond(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        //upper triangle
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawHaloolLineOfKohaviot2(i);//------
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        //bottom triangle
        for (i = (this.width - 2); i >= 1; i -= 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawHaloolLineOfKohaviot2(i);//------
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write(`</font>`);
    }

    public drawDiamondOfNums(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        //upper triangle
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
        //bottom triangle
        for (i = (this.width - 2); i >= 1; i -= 2) {
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

    public drawDiamondOfReversedNums(): void {
        let i: number;
        let j: number;
        document.write(`<font color=${this.color}>`);
        //upper triangle
        for (i = 1; i <= this.width; i += 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawReversedLineOfNums2(i);
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        //bottom triangle
        for (i = (this.width - 2); i >= 1; i -= 2) {
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            this.drawReversedLineOfNums2(i);
            for (j = 1; j <= ((this.width - i) / 2); j++) {
                document.write("&nbsp;&nbsp;");
            }
            document.write("<br>");
        }
        document.write(`</font>`);
    }

    public displayDiamondDetails(): void {
        //super.displayDetails();
        let halfWidth: number = (this.width) / 2;
        let yeter: number = ((halfWidth * halfWidth) + (halfWidth * halfWidth)); // Pythagoras
        yeter = Math.sqrt(yeter); // Pythagoras
        let perimeter: number = (yeter * 4);
        let area: number = ((this.width * this.width) / 2);
        document.write(`<br><u>Shape's Color</u>: ${this.color}<br>`);
        document.write(`<u>Diamond's Width</u>: ${this.width}<br>`);
        document.write(`<u>Diamond's Height</u>: ${this.width}<br>`); // In a diamond: width=height
        document.write(`<u>Diamond's Yeter</u>: ${yeter}<br>`);
        document.write(`<u>Diamond's Perimeter</u>: ${perimeter}<br>`);
        document.write(`<u>Diamond's Area</u>: ${area}<br>`);
    }
}