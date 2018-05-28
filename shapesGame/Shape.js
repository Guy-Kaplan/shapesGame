var Shape = /** @class */ (function () {
    //private _number: number;
    function Shape(color) {
        if (color === void 0) { color = "---"; }
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
    Shape.prototype.displayDetails = function () {
        document.write("<br><u>Shape's Color</u>: " + this.color + "<br>");
        //document.write(`<u>Shape number ID</u>: ${this.number}<br>`);
        //document.write("----------------------------------------------<br>");
    };
    //------------------Lines----------------------------------
    Shape.prototype.drawLineOfKohaviot = function (num) {
        var i;
        for (i = 1; i <= num; i++) {
            document.write("*&nbsp;");
        }
        document.write("<br>");
    };
    Shape.prototype.drawHaloolLineOfKohaviot = function (num) {
        var i;
        for (i = 1; i <= num; i++) {
            if (i == 1 || i == num) {
                document.write("*&nbsp;");
            }
            else {
                document.write("&nbsp;&nbsp;");
            }
        }
        document.write("<br>");
    };
    Shape.prototype.drawLineOfNums = function (num) {
        var i;
        for (i = 1; i <= num; i++) {
            document.write(i + "&nbsp;");
        }
        document.write("<br>");
    };
    Shape.prototype.drawReversedLineOfNums = function (num) {
        var i;
        for (i = num; i >= 1; i--) {
            document.write(i + "&nbsp;");
        }
        document.write("<br>");
    };
    //------------------Lines WITHOUT <br>----------------------------------
    Shape.prototype.drawLineOfKohaviot2 = function (num) {
        var i;
        for (i = 1; i <= num; i++) {
            document.write("*&nbsp;");
        }
        //document.write("<br>");
    };
    Shape.prototype.drawHaloolLineOfKohaviot2 = function (num) {
        var i;
        for (i = 1; i <= num; i++) {
            if (i == 1 || i == num) {
                document.write("*&nbsp;");
            }
            else {
                document.write("&nbsp;&nbsp;");
            }
        }
        //document.write("<br>");
    };
    Shape.prototype.drawLineOfNums2 = function (num) {
        var i;
        for (i = 1; i <= num; i++) {
            document.write(i + "&nbsp;");
        }
        //document.write("<br>");
    };
    Shape.prototype.drawReversedLineOfNums2 = function (num) {
        var i;
        for (i = num; i >= 1; i--) {
            document.write(i + "&nbsp;");
        }
        //document.write("<br>");
    };
    return Shape;
}());
//# sourceMappingURL=Shape.js.map