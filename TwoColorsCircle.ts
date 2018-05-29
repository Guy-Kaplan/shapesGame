class TwoColorsCircle extends Circle {

    //private _radius: number;
    public outerColor: string;

    public constructor(color: string = "White", radius: number = 1, outerColor: string = "Black") {
        super(color, radius);
        this.outerColor = outerColor;
    }


    //------------------TwoColorsCircle----------------------------------
    public drawTwoColorsCircle(): void {
        document.write(`<svg width="100" height="100">`);
        document.write(`<circle cx="50" cy="50" r="${this.radius * 10}" stroke="${this.outerColor}" stroke-width="4" fill="${this.color}" onclick="myFunction(this)" />`);
        document.write(`Sorry, your browser does not support inline SVG.</svg>`);
        document.write("<br><br>");
    }

    public myFunction(elmnt) {
        elmnt.style.cx++; // not working...
    }  

    public displayDetails(): void {
        document.write(`<u>Shape's Outer Color</u>: ${this.outerColor}`);
        super.displayDetails();
        //let diameter: number = this.radius * 2;
        //let perimeter: number = diameter * Math.PI;
        //let area: number = (Math.PI * this.radius * this.radius);
        //document.write(`<u>Circle's Radius</u>: ${this.radius}<br>`);
        //document.write(`<u>Circle's Diameter</u>: ${diameter}<br>`);
        //document.write(`<u>Circle's Perimeter</u>: ${perimeter}<br>`);
        //document.write(`<u>Circle's Area</u>: ${area}<br><br>`);
        //document.write(`<b>PIE</b> = ${Math.PI}<br>`);

    }
}

