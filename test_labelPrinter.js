/*
* @Author: YangZhou
* @Date:   2016-06-30 21:14:42
* @Last Modified by:   YangZhou
* @Last Modified time: 2016-07-01 18:12:56
*/

'use strict';
var printer=require('./labelPrinter.js');
var content=[{type:"line",x:0,y:20.2,x1:100,y1:20,w:2},{type:"2dcode",codeNumber:"hello",x:0,y:30,size:50}];
var content1=[{type:"text",x:0,y:0,text:"12345678",font_size:10,font_family:"微软雅黑",isBold:0},{type:"barcode",codeNumber:"12345678",x:0,y:30,w:100,h:30}]
printer.printLabels([
    [
        {
            "type": "text",
            "text": "UPING TEXTTILE",
            "font_family": "微软雅黑",
            "font_size": 15,
            "isBold": 1,
            "x": 30,
            "y": 10
        },
        {
            "type": "line",
            "w": 2,
            "x": 75.5906,
            "x1": 75.5906,
            "y": 30,
            "y1": 113.38589999999999
        },
        {
            "type": "line",
            "w": 2,
            "x": 0,
            "x1": 151.1812,
            "y": 30,
            "y1": 30
        },
        {
            "type": "text",
            "text": "Item NO.",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 5,
            "y": 33
        },
        {
            "type": "text",
            "text": "UP-F20160519-1",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 80.5906,
            "y": 33
        },
        {
            "type": "line",
            "w": 2,
            "x": 0,
            "x1": 151.1812,
            "y": 43.89765,
            "y1": 43.89765
        },
        {
            "type": "text",
            "text": "Item Name",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 5,
            "y": 46.89765
        },
        {
            "type": "text",
            "text": "搞定了",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 80.5906,
            "y": 46.89765
        },
        {
            "type": "line",
            "w": 2,
            "x": 0,
            "x1": 151.1812,
            "y": 57.7953,
            "y1": 57.7953
        },
        {
            "type": "text",
            "text": "Composition",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 5,
            "y": 60.7953
        },
        {
            "type": "text",
            "text": "100%T",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 80.5906,
            "y": 60.7953
        },
        {
            "type": "line",
            "w": 2,
            "x": 0,
            "x1": 151.1812,
            "y": 71.69295,
            "y1": 71.69295
        },
        {
            "type": "text",
            "text": "Yarn Count",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 5,
            "y": 74.69295
        },
        {
            "type": "text",
            "text": "68D FDY",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 80.5906,
            "y": 74.69295
        },
        {
            "type": "line",
            "w": 2,
            "x": 0,
            "x1": 151.1812,
            "y": 85.5906,
            "y1": 85.5906
        },
        {
            "type": "text",
            "text": "Width",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 5,
            "y": 88.5906
        },
        {
            "type": "text",
            "text": "154",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 80.5906,
            "y": 88.5906
        },
        {
            "type": "line",
            "w": 2,
            "x": 0,
            "x1": 151.1812,
            "y": 99.48825,
            "y1": 99.48825
        },
        {
            "type": "text",
            "text": "Weight",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 5,
            "y": 102.48825
        },
        {
            "type": "text",
            "text": "130",
            "font_family": "微软雅黑",
            "isBold": 0,
            "font_size": 10,
            "x": 80.5906,
            "y": 102.48825
        }
    ]
]);