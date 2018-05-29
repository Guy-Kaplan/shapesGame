class Circle extends Shape {

    private _radius: number;

    public constructor(color: string = "White", radius: number = 1) {
        super(color);
        this.radius = radius;
    }

    public set radius(value: number) {
        if (value == 1 || value == 2 || value == 3 || value == 4) {
            this._radius = value;
        }
    }

    public get radius(): number {
        return this._radius;
    }

    //------------------Circle----------------------------------
    public drawCircle(): void {
        document.write(`<svg height="100" width="100">`);
        document.write(`<circle cx="50" cy="50" r="${this.radius*10}" stroke="black" stroke-width="3" fill="${this.color}" />`);
        document.write(`Sorry, your browser does not support inline SVG.</svg>`);
        document.write("<br><br>");
    }


    public displayDetails(): void {
        super.displayDetails();
        let diameter: number = this.radius * 2;
        let perimeter: number = diameter * Math.PI;
        let area: number = (Math.PI * this.radius * this.radius);
        document.write(`<u>Circle's Radius</u>: ${this.radius}<br>`);
        document.write(`<u>Circle's Diameter</u>: ${diameter}<br>`);
        document.write(`<u>Circle's Perimeter</u>: ${perimeter}<br>`);
        document.write(`<u>Circle's Area</u>: ${area}<br><br>`);
        document.write(`<b>PIE</b> = ${Math.PI}<br>`);

    }
}

