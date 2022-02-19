import CGPoint from "./CGPoint";
export default class CGRect {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    constructor(x: number, y: number, width: number, height: number);
    get origin(): CGPoint;
    get topLeft(): CGPoint;
    get topRight(): CGPoint;
    get bottomRight(): CGPoint;
    get bottomLeft(): CGPoint;
    get maxX(): number;
    get maxY(): number;
    intersects(rect: CGRect): boolean;
    contains(point: CGPoint): boolean;
}
