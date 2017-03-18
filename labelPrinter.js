/*
 * @Author: YangZhou
 * @Date:   2016-06-30 17:05:05
 * @Last Modified by:   YangZhou
 * @Last Modified time: 2016-10-27 21:34:14
 */
(function() {
    'use strict';
    var printer = "Gprinter 2120TF(标签)";
    var size = "4x3"; //cm
    var dir = __dirname;

    function echo(s) {
        if ("undefined" == typeof alert) console.log(s);
        else alert(s);
    }

    function wrapJson(content) {
        var c = content.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"");
        c = "\"" + c + "\"";
        return c;
    }

    function printLabel(content, callback) {
        var exec = require('child_process').exec;
        content = JSON.stringify(content);
        //content = content.replace(/"(\w+)"(\s*:\s*)/g, "$1$2");
        var c = wrapJson(content);
        var cmdStr = [dir + "\\labelPrinter.exe", "json", "custom", "\"" + printer + "\"", size, c].join(" ");
        exec(cmdStr, function(err, stdout, stderr) {
            if (stdout == "") {
                echo("无返回值");
                return;
            }
            var status = JSON.parse(stdout).status;
            if (status == 200) {
                if (callback) callback();
            } else if (status == 100) echo("打印机未找到！请确认您安装了打印机" + printer);
            else if (status == 300) echo("打印格式错误或打印机未正确配置");
            else if (status == 400) echo("未知纸张格式");
            else echo("未知打印错误");
        });
    }

    function get_available(callback) {
        var exec = require('child_process').exec;
        var cmdStr = [dir + "\\labelPrinter.exe", "printers"].join(" ");
        exec(cmdStr, function(err, stdout, stderr) {
            if (stdout == "") {
                echo("无返回值");
                return;
            }
            var status = JSON.parse(stdout).status;
            if (status == 200) {
                if (callback) callback(JSON.parse(stdout).msg);
            } else echo("未知错误");
        });
    }

    function printLabels(contents) {
        if (contents.length == 0) return;
        var content = contents.shift();
        printLabel(content, function() { printLabels(contents) });
    }

    function setPara(printer0, size0) {
        printer = printer0;
        size = size0;
    }
    if (!module.parent) { //直接运行
        var content = [{ type: "line", x: 0, y: 20, x1: 100, y1: 20, w: 2 }, { type: "2dcode", codeNumber: "hello", x: 0, y: 30, size: 50 }];
        var content1 = [{ type: "text", x: 0, y: 0, text: "12345678", font_size: 10, font_family: "微软雅黑", isBold: 0 }, { type: "barcode", codeNumber: "12345678", x: 0, y: 30, w: 100, h: 30 }]
        printLabels([content, content1]);
    }
    module.exports.printLabels = printLabels;
    module.exports.setPara = setPara;
    module.exports.get_available = get_available;
})();
