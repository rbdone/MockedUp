/**
 * @license Copyright (c) 2012 Jason Dobry
 * Available via the MIT.
 * see: http://github.com/jmdobry/MockedUp for details
 */
/*jslint regexp: true */
/*global require: false, XMLHttpRequest: false, ActiveXObject: false,
  define: false, window: false, process: false, Packages: false,
  java: false, location: false */
define(['esprima', 'text', 'module'], function (esprima, text, module) {
    'use strict';

  var mockedup,
      buildMap = {};

  mockedup = {
    version: '0.0.0',

    load: function (name, req, onLoad, config) {

      var ast;

      text.get(req.toUrl(name), function (data) {
        if (config.isBuild) {
          req([name], function (value) {
            onLoad(value);
          });
        } 
        else {
          try {
            window.ast = esprima.parse(data);

            // @TODO Revursively traverse AST to transform code into mock objects.

            onLoad({
              name: 'I am a mock!'
            });
          }
          catch (err) {
            console.error(err);
            req([name], function (value) {
              onLoad(value);
            });
          }
        }
      });
    }
  };

  return mockedup;
});
