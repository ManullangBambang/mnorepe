(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@test/shared"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const shared_1 = require("@test/shared");
    (0, shared_1.hello)('yyyyyyyyyyyyyyyyyyyyyyy');
    console.log('--------------------------');
});
