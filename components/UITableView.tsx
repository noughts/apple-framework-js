import React from "react"
import CGRect from "./CGRect";
import NSIndexPath from "./NSIndexPath";
import UITableViewCell from "./UITableViewCell";
import UITableViewDataSource from "./UITableViewDataSource"
import UITableViewDelegate from "./UITableViewDelegate";

export default class UITableView extends React.Component<{
	dataSource: UITableViewDataSource;
	delegate: UITableViewDelegate;
	rowHeight: number;
}>{


	root_ref = React.createRef<HTMLDivElement>();

	constructor(a: any) {
		super(a);
		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount(): void {
		this.root_ref.current?.addEventListener("scroll", this.onScroll);
	}
	componentWillUnmount(): void {
		this.root_ref.current?.removeEventListener("scroll", this.onScroll);
	}

	onScroll(e: Event) {
		const target: HTMLDivElement = e.target as HTMLDivElement;
		console.log(target.scrollTop, target.clientHeight)
	}






	// UITableView Native --------------



	// Getting the Drawing Areas for the Table
	rectForRow(at: NSIndexPath): CGRect {
		const y = this.props.rowHeight * at.row;
		let width = 100;
		if( this.root_ref.current ){
			width = this.root_ref.current.clientWidth;
		}
		return new CGRect(0, y, width, this.props.rowHeight);
	}


	// Other

	// dequeueReusableCell(withIdentifier: string, indexPath: NSIndexPath): UITableViewCell {
	// 	return null;
	// }

	register(component: React.Component, forCellReuseIdentifier: string): void {

	}

	get indexPathsForVisibleRows(): NSIndexPath[] {
		return [];
	}

	get height(): number {
		return this.props.rowHeight * this.props.dataSource.numberOfRowsInSection(0);
	}


	render() {
		console.log(this.height)
		return <>
			<div className="UITableView" ref={this.root_ref}>
				<div className="scrollView" >
					hogehoge
				</div>

			</div>

			<style jsx>{`
				.UITableView{
					height:100%;
					width:100%;
					overflow-y:scroll;
					overflow-x:hidden;
					color:red;
				}
				.scrollView{
					height: ${this.height}px;
				}
			`}</style>
		</>
	}
}