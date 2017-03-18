/*
 * @Author: YangZhou
 * @Date:   2016-11-17 20:07:58
 * @Last Modified by:   YangZhou
 * @Last Modified time: 2016-11-17 21:40:09
 */

'use strict';
var excel = require('node-xlsx');
var list = excel.parse("./sample.xlsx");
var u = list[0].data;
for (var i in u) {
    var x = u[i];
    console.log(JSON.stringify(x));
}
var file = excel.build([{
    data: [
        ["姓名", "性别", "年龄"]
    ]
}]);
var fs = require("fs");
fs.writeFileSync('write.xlsx', file, 'binary');
