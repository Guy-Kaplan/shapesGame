abstract class Shape {

    public color: string;
    //private _number: number;

    public constructor(color: string = "---") {
        this.color = color;
        if (color == "") {
            this.color = "Black";
        }
        //this.number = number;
    }

    /*public set number(value: number) {
        if (value == 1 || value == 2 || value == 3 || value == 4 || value == 5) {
            this._number = value;
        }
    }*/

    /*public get number(): number {
        return this._number;
    }*/

    public displayDetails(): void {
        document.write(`<br><u>Shape's Color</u>: ${this.color}<br>`);
        //document.write(`<u>Shape number ID</u>: ${this.number}<br>`);
        //document.write("----------------------------------------------<br>");

    }
    //------------------Lines----------------------------------
    public drawLineOfKohaviot(num: number): void { // *****
        let i: number;
        for (i = 1; i <= num; i++) {
         document.write("*&nbsp;");
        }
        document.write("<br>");
    }

    public drawHaloolLineOfKohaviot(num: number): void { // *   *
        let i: number;
        for (i = 1; i <= num; i++) {
            if (i == 1 || i == num) {
                document.write("*&nbsp;");
            }
            else {
                document.write("&nbsp;&nbsp;");
            }
        }
        document.write("<br>");
    }

    public drawLineOfNums(num: number): void { // 12345
        let i: number;
        for (i = 1; i <= num; i++) {
            document.write(i + "&nbsp;");
        }
        document.write("<br>");
    }

    public drawReversedLineOfNums(num: number): void { // 54321
        let i: number;
        for (i = num; i >= 1; i--) {
            document.write(i + "&nbsp;");
        }
        document.write("<br>");
    }
    //------------------Lines WITHOUT <br>----------------------------------
    public drawLineOfKohaviot2(num: number): void { // *****
        let i: number;
        for (i = 1; i <= num; i++) {
            document.write("*&nbsp;");
        }
        //document.write("<br>");
    }

    public drawHaloolLineOfKohaviot2(num: number): void { // *   *
        let i: number;
        for (i = 1; i <= num; i++) {
            if (i == 1 || i == num) {
                document.write("*&nbsp;");
            }
            else {
                document.write("&nbsp;&nbsp;");
            }
        }
        //document.write("<br>");
    }

    public drawLineOfNums2(num: number): void { // 12345
        let i: number;
        for (i = 1; i <= num; i++) {
            document.write(i + "&nbsp;");
        }
        //document.write("<br>");
    }

    public drawReversedLineOfNums2(num: number): void { // 54321
        let i: number;
        for (i = num; i >= 1; i--) {
            document.write(i + "&nbsp;");
        }
        //document.write("<br>");
    }


}