import Point from "../Point";

class PointImpl implements Point {
    // x: number;
    // y: number;

    // 加上下划线标识私有变量。
    private _test: number;

    constructor(public x: number, public y: number = 0) {
        this._test = 10;
    }

    getDistances = (point: Point) => {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    }

    drawPoint = () => {
        console.log({x: this.x, y: this.y});
    }

    //getTest = () => this.test;

    get test() {
        return this._test;
    }

   // setTest: (test: number) => void = (test: number) => this.test = test;

    set test(test: number) {
        this._test = test;
    }
}

const point = new PointImpl(2, 2);
point.drawPoint();
console.log(point.getDistances(new PointImpl(4, 2)));

console.log(`Original value of test: ${point.test}`);
point.test = 5
console.log(`Updated value of test: ${point.test}`);