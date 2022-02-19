"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CGRect_1 = __importDefault(require("./CGRect"));
var UITableView = /** @class */ (function (_super) {
    __extends(UITableView, _super);
    function UITableView(a) {
        var _this = _super.call(this, a) || this;
        _this.root_ref = react_1.default.createRef();
        _this.onScroll = _this.onScroll.bind(_this);
        return _this;
    }
    UITableView.prototype.componentDidMount = function () {
        var _a;
        (_a = this.root_ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", this.onScroll);
    };
    UITableView.prototype.componentWillUnmount = function () {
        var _a;
        (_a = this.root_ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("scroll", this.onScroll);
    };
    UITableView.prototype.onScroll = function (e) {
        var target = e.target;
        console.log(target.scrollTop, target.clientHeight);
    };
    // UITableView Native --------------
    // Getting the Drawing Areas for the Table
    UITableView.prototype.rectForRow = function (at) {
        var y = this.props.rowHeight * at.row;
        var width = 100;
        if (this.root_ref.current) {
            width = this.root_ref.current.clientWidth;
        }
        return new CGRect_1.default(0, y, width, this.props.rowHeight);
    };
    // Other
    // dequeueReusableCell(withIdentifier: string, indexPath: NSIndexPath): UITableViewCell {
    // 	return null;
    // }
    UITableView.prototype.register = function (component, forCellReuseIdentifier) {
    };
    Object.defineProperty(UITableView.prototype, "indexPathsForVisibleRows", {
        get: function () {
            return [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UITableView.prototype, "height", {
        get: function () {
            return this.props.rowHeight * this.props.dataSource.numberOfRowsInSection(0);
        },
        enumerable: false,
        configurable: true
    });
    UITableView.prototype.render = function () {
        console.log(this.height);
        return <>
			<div className="UITableView" ref={this.root_ref}>
				<div className="scrollView">
					hogehoge
				</div>

			</div>

			<style jsx>{"\n\t\t\t\t.UITableView{\n\t\t\t\t\theight:100%;\n\t\t\t\t\twidth:100%;\n\t\t\t\t\toverflow-y:scroll;\n\t\t\t\t\toverflow-x:hidden;\n\t\t\t\t\tcolor:red;\n\t\t\t\t}\n\t\t\t\t.scrollView{\n\t\t\t\t\theight: ".concat(this.height, "px;\n\t\t\t\t}\n\t\t\t")}</style>
		</>;
    };
    return UITableView;
}(react_1.default.Component));
exports.default = UITableView;
//# sourceMappingURL=UITableView.jsx.map