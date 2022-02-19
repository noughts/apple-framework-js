import NSIndexPath from "./NSIndexPath";
import UITableView from "./UITableView";
import UITableViewCell from "./UITableViewCell";

export default interface UITableViewDataSource{
	numberOfSections(_in:UITableView):number;
	numberOfRowsInSection(sectionId:number):number;
	cellForRowAt(tableView:UITableView, indexPath:NSIndexPath):UITableViewCell;
}