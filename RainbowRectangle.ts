class RainbowRectangle extends Rectangle {

    //private _width: number;
    //private _height: number;

    public constructor(color: string = "Rainbow", width: number = 1, height: number = 1) {
        super(color);
        this.width = width;
        this.height = height;

    }

    //------------------RainbowRectangle----------------------------------
    public drawRainbowRectangle(): void {
        let newWidth: number = this.width * 10;
        let newHeight: number = this.height * 10;
        document.write(`<canvas id='myCanvas' width='${newWidth}' height='${newHeight}'>`); //style='border:1px solid #d3d3d3;'
        document.write("Your browser does not support the HTML5 canvas tag.</canvas>");
        var c = document.getElementById("myCanvas");
        var ctx = (<HTMLCanvasElement>c).getContext("2d");
        var grd = ctx.createLinearGradient(0, 0, newWidth, 0);
        grd.addColorStop(0, "red");
        //grd.addColorStop(0.1, "---");
        grd.addColorStop(0.2, "yellow");
        //grd.addColorStop(0.3, "---");
        grd.addColorStop(0.4, "green");
        //grd.addColorStop(0.5, "---");
        grd.addColorStop(0.6, "lightblue");
        //grd.addColorStop(0.7, "---");
        grd.addColorStop(0.8, "blue");
        //grd.addColorStop(0.9, "---");
        grd.addColorStop(1, "purple");

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, newWidth, newHeight);

        document.write("<br><br>");
    }

 
    //public displayDetails(): void {
        //super.displayDetails();
        //let perimeter: number = ((2 * this.width) + (2 * this.height));
        //let area: number = (this.width * this.height);
        //document.write(`<u>Rectangle's Width</u>: ${this.width}<br>`);
        //document.write(`<u>Rectangle's Height</u>: ${this.height}<br>`);
        //document.write(`<u>Rectangle's Perimeter</u>: ${perimeter}<br>`);
        //document.write(`<u>Rectangle's Area</u>: ${area}<br>`);
    //}
}

