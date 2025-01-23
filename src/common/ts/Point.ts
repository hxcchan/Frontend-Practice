interface Point {
    x: number;
    y: number;
    getDistances: (point: Point) => number;
    drawPoint: () => void;
    test: number;
}

export default Point;