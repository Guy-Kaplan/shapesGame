class Ellipse extends Shape {

    public color2: string;
    private _width: number;
    private _height: number;

    public constructor(color: string = "White", color2: string = "White", width: number = 1, height: number = 1) {
        super(color);
        this.color2 = color2;
        this.width = width;
        this.height = height;
    }

    public set width(value: number) {
        if (value >= 1 && value <= 20) {
            this._width = value;
        }
    }

    public get width(): number {
        return this._width;
    }

    public set height(value: number) {
        if (value >= 1 && value <= 20) {
            this._height = value;
        }
    }

    public get height(): number {
        return this._height;
    }

    //------------------Ellipse----------------------------------
    public drawEllipse(): void {
        let newWidth: number = this.width * 10;
        let newHeight: number = this.height * 10;
        document.write(`<svg height="400" width="400">`);
        document.write(`<defs>`);
        document.write(`<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">`);
        document.write(`<stop offset="0%" style = "stop-color:${this.color};stop-opacity:1" />`); //style = "stop-color:rgb(255,255,0);stop-opacity:1"
        document.write(`<stop offset="100%" style="stop-color:${this.color2};stop-opacity:1" />`); //style="stop-color:rgb(255,0,0);stop-opacity:1"
        document.write(`</linearGradient></defs>`);
        document.write(`<ellipse cx="200" cy="200" rx="${newWidth}" ry="${newHeight}" fill="url(#grad1)" /></svg>`);
        document.write("<br><br>");
    }


    public displayDetails(): void {
        super.displayDetails();
        //let diameter: number = this.radius * 2;
        //let perimeter: number = diameter * Math.PI;
        //let area: number = (Math.PI * this.radius * this.radius);
        document.write(`<u>Shape's Second Color</u>: ${this.color2}<br>`);
        document.write(`<u>Ellipse's width</u>: ${this.width}<br>`);
        document.write(`<u>Ellipse's height</u>: ${this.height}<br>`);
        //document.write(`<u>Circle's Area</u>: ${area}<br><br>`);
        //document.write(`<b>PIE</b> = ${Math.PI}<br>`);

    }
}

