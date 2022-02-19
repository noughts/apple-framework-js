import NSIndexPath from "./NSIndexPath";
import UITableView from "./UITableView";
import UITableViewCell from "./UITableViewCell";

export default interface UITableViewDelegate{
	willDisplayCell(cell:UITableViewCell, forRowAt:NSIndexPath):void;
}