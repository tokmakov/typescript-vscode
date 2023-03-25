(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var User = (function () {
        function User() {
            this.name = 'Аноним';
        }
        User.prototype.hello = function () {
            console.log("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(this.name, "!"));
        };
        return User;
    }());
    exports.default = User;
});
//# sourceMappingURL=User.class.js.map