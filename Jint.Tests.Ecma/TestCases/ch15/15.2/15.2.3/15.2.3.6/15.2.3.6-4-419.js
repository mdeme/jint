/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-419.js
 * @description ES5 Attributes - Inherited property whose [[Enumerable]] attribute is set to true is enumerable (Function.prototype.bind)
 */


function testcase() {
        var foo = function () { };
        try {
            Object.defineProperty(Function.prototype, "prop", {
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            });

            var obj = foo.bind({});
            var verifyEnumerable = false;
            for (var p in obj) {
                if (p === "prop") {
                    verifyEnumerable = true;
                }
            }

            return !obj.hasOwnProperty("prop") && verifyEnumerable;
        } finally {
            delete Function.prototype.prop;
        }
    }
runTestCase(testcase);
