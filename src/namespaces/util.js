/// <reference path="main.ts" />
var util;
(function (util) {
    function hel() {
        console.log('hello world');
    }
    util.hel = hel;
})(util || (util = {}));
