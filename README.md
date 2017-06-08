# qqprinter

  <a href="https://www.npmjs.com/package/qqprinter"><img src="https://img.shields.io/npm/dm/qqprinter.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/qqprinter"><img src="https://img.shields.io/npm/v/qqprinter.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/qqprinter"><img src="https://img.shields.io/npm/l/qqprinter.svg" alt="License"></a>

A nodejs package for printing labels under Windows framework net4.0

> @Authour Yang Zhou

> @Mail  zhouyang@datahub.top

# Summary

## What

- qqprinter is a js wrapper for label printer operations such as getting printer names, setting default printer, and printing some contents discripted with JSON format.

- qqprinter is able to print text, tables, images and QRcodes.

## Why

- With the developing of our ERP system, it's important access printers directly from js under the framework of NW.js. However there's not a proper library yet, so a simple but enough wrapper is written.

## How

- A full functional binary is preprared with c#.net4.0 named as labelPrinter.exe. This binary could be used with command-line operations. With the help of childprocess module of nodejs we provide you a js wrapper called labelPrinter.js.

# Usage

## Install 

you can simply install the module by 
``` bash
npm install qqprinter --save
```

Examples can be found in test_get_availabel.js and test_labelPrinter.js.

- get_available can let you know what printers are available on this computer.

- labelPrinter let print some labels using js.

Enjoy!
