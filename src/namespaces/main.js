/// <reference path="util.ts" />
var util;
(function (util) {
    function hi() {
        console.log('hi');
    }
    util.hi = hi;
})(util || (util = {}));
util.hi();
util.hel();
