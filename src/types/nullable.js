"use strict";
var s = "foo";
s = null;
// error, 'null' is not assignable to 'string'
var sn = "bar";
sn = null; // ok
