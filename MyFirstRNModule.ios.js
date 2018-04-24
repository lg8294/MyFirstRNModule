/**
 * @providesModule MyFirstRNModule
 * @flow
 */
'use strict';

var NativeMyFirstRNModule = require('NativeModules').MyFirstRNModule;

/**
 * High-level docs for the MyFirstRNModule iOS API can be written here.
 */

var MyFirstRNModule = {
  test: function() {
    NativeMyFirstRNModule.test();
  }
};

module.exports = MyFirstRNModule;
