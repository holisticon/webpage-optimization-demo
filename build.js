#! /usr/bin/env node

'use strict';

const path = require('path');
const fs = require('fs');
const critical = require('critical');

critical.generate({
    inline: true,
    /* Inline the generated critical-path CSS, true generates HTML and  false generates CSS */
    inlineImages: true,
    /* Inline images */
    base: path.join(__dirname, 'dist'),
    // HTML source files
    src: 'index.html',
    maxImageFileSize: 2048000,
    dest: 'optimized.html',
    /* Sets a max file size (in bytes) for base64 inlined images */
    //timeout: 120000, /* Sets a maximum timeout for the operation */
    dimensions: [{
        height: 700,
        width: 400
    }, {
        height: 900,
        width: 1200
    }],
    timeout: 60000,
    minify: true
});
