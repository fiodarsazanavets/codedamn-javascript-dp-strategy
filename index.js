const PathSeparatorContext = require('./pathSeparatorContext.js');
const UnixPathSeparatorStrategy = require('./unixPathSeparatorStrategy.js');
const WindowsPathSeparatorStrategy = require('./windowsPathSeparatorStrategy.js');

var context = new PathSeparatorContext();

var pathSeparator = process.platform == 'win32' ? 
    '\'' :
    '/';

console.log('The path separator is .' + context.getPathSeparator());