"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CGPoint_1 = __importDefault(require("./CGPoint"));
var CGRect = /** @class */ (function () {
    function CGRect(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(CGRect.prototype, "origin", {
        // Basic Geometric Properties
        get: function () {
            return new CGPoint_1.default(this.x, this.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CGRect.prototype, "topLeft", {
        get: function () {
            return this.origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CGRect.prototype, "topRight", {
        get: function () {
            return new CGPoint_1.default(this.maxX, this.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CGRect.prototype, "bottomRight", {
        get: function () {
            return new CGPoint_1.default(this.maxX, this.maxY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CGRect.prototype, "bottomLeft", {
        get: function () {
            return new CGPoint_1.default(this.x, this.maxY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CGRect.prototype, "maxX", {
        // Calculated Geometric Properties
        get: function () {
            return this.x + this.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CGRect.prototype, "maxY", {
        get: function () {
            return this.y + this.height;
        },
        enumerable: false,
        configurable: true
    });
    // Checking Characteristics
    CGRect.prototype.intersects = function (rect) {
        if (this.contains(rect.topLeft)) {
            return true;
        }
        if (this.contains(rect.topRight)) {
            return true;
        }
        if (this.contains(rect.bottomRight)) {
            return true;
        }
        if (this.contains(rect.bottomLeft)) {
            return true;
        }
        return false;
    };
    CGRect.prototype.contains = function (point) {
        if (this.x <= point.x && point.x <= this.maxX) {
            if (this.y <= point.y && point.y <= this.maxY) {
                return true;
            }
        }
        return false;
    };
    return CGRect;
}());
exports.default = CGRect;
//# sourceMappingURL=CGRect.js.map