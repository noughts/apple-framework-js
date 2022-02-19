import CGPoint from "./CGPoint";

export default class CGRect {
	readonly x: number;
	readonly y: number;
	readonly width:number;
	readonly height:number;
	constructor(x: number, y: number, width:number, height:number) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	// Basic Geometric Properties
	get origin():CGPoint{
		return new CGPoint(this.x, this.y);
	}
	get topLeft():CGPoint{
		return this.origin;
	}
	get topRight():CGPoint{
		return new CGPoint(this.maxX, this.y);
	}
	get bottomRight():CGPoint{
		return new CGPoint(this.maxX, this.maxY);
	}
	get bottomLeft():CGPoint{
		return  new CGPoint(this.x, this.maxY);
	}


	// Calculated Geometric Properties
	get maxX():number{
		return this.x + this.width;
	}	
	get maxY():number{
		return this.y + this.height;
	}

	// Checking Characteristics
	intersects(rect:CGRect):boolean{
		if(this.contains(rect.topLeft)){
			return true;
		}
		if(this.contains(rect.topRight)){
			return true;
		}
		if(this.contains(rect.bottomRight)){
			return true;
		}
		if(this.contains(rect.bottomLeft)){
			return true;
		}
		return false;
	}
	contains(point:CGPoint):boolean{
		if(this.x <= point.x && point.x <= this.maxX){
			if( this.y <= point.y && point.y <= this.maxY){
				return true;
			}
		}
		return false;
	}
}