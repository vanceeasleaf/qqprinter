/*
 * @Author: YangZhou
 * @Date:   2016-10-27 21:33:36
 * @Last Modified by:   YangZhou
 * @Last Modified time: 2016-10-27 21:34:39
 */

'use strict';
var printer = require('./labelPrinter.js');
printer.get_available(function(data) {
    console.log(data);
})
