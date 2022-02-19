import React from "react";
import CGRect from "./CGRect";
import NSIndexPath from "./NSIndexPath";
import UITableViewDataSource from "./UITableViewDataSource";
import UITableViewDelegate from "./UITableViewDelegate";
export default class UITableView extends React.Component<{
    dataSource: UITableViewDataSource;
    delegate: UITableViewDelegate;
    rowHeight: number;
}> {
    root_ref: React.RefObject<HTMLDivElement>;
    constructor(a: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onScroll(e: Event): void;
    rectForRow(at: NSIndexPath): CGRect;
    register(component: React.Component, forCellReuseIdentifier: string): void;
    get indexPathsForVisibleRows(): NSIndexPath[];
    get height(): number;
    render(): JSX.Element;
}
