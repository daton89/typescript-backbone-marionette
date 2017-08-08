var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "backbone.marionette"], function (require, exports, Marionette) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MarionetteApp = (function (_super) {
        __extends(MarionetteApp, _super);
        function MarionetteApp() {
            var _this = _super.call(this) || this;
            _this.on("initialize:after", _this.initializeAfter);
            return _this;
        }
        MarionetteApp.prototype.initializeAfter = function () {
            alert("initializeAfter called");
        };
        return MarionetteApp;
    }(Marionette.Application));
});
