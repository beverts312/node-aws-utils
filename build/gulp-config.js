'use strict';

var path = require('path');
var srcRoot = './src';
var scriptsRoot = './scripts';
var testRoot = './test';
var typescriptDefinitions = './node_modules/@types/*/index.d.ts';
var tsconfig = './tsconfig.json';

module.exports = {
    packageJSON: path.resolve('package.json'),
    root: srcRoot,
    allJavascript: [
        '**/*.js',
        '!node_modules/**'
    ],
    allTranspiledJavascript: [
        srcRoot + '**/*.js*',
        scriptsRoot + '**/*.js*',
        testRoot + '**/*.js*'
    ],
    appTranspiledJavaScript: srcRoot + '**/*.js',
    javascriptUnitTests: testRoot + '/**/*.js',
    allTypescript: [
        srcRoot + '/**/*.ts',
        scriptsRoot + '/**/*.ts',
        testRoot + '/**/*-tests.ts',
        typescriptDefinitions       
    ],
    appTypescript: [
        srcRoot + '/**/*.ts',
        scriptsRoot + '/**/*.ts',
        testRoot + '/**/*-tests.ts',
    ],
    jsScripts: scriptsRoot + '/**/*.js',
    jsExecutable: './bin',
    typescriptCompilerOptions: tsconfig
};
