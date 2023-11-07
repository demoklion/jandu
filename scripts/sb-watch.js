'use strict';

const _ = require('lodash');
const chokidar = require('chokidar');
const upath = require('upath');
const renderAssets = require('./render-assets');
const renderScripts = require('./render-scripts');
const renderSCSS = require('./render-scss');

const watcher = chokidar.watch('src', {
  persistent: true,
});

let READY = false;

watcher.on('add', filePath => _processFile(upath.normalize(filePath), 'add'));
watcher.on('change', filePath => _processFile(upath.normalize(filePath), 'change'));
watcher.on('ready', () => {
  READY = true;
  console.log(' READY TO ROLL!');
});

_handleSCSS();

function _handleSCSS() {
  renderSCSS();
}
