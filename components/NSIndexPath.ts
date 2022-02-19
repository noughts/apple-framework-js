export default class NSIndexPath {
	readonly row: number;
	readonly section: number;
	constructor(row: number, section: number) {
		this.row = row;
		this.section = section;
	}
}