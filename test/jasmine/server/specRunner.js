var requirejs = require('requirejs'),
    jasmine = require('jasmine-node'),
    sys = require('util'),
    path = require('path');

// make define available globally like it is in the browser
global.define = require('requirejs');

// list all the tests to be run
var specs = [
  'spec/moduleSpec'
]

requirejs.config({
  //baseUrl: '../',
  nodeRequire: require,
  paths: {
    spec: '../spec',
  }
});

// map jasmine methods to global namespace
for (key in jasmine) {
    if (jasmine[key] instanceof Function) {
    global[key] = jasmine[key];
  }
}

// Test helper: set up a faux-DOM for running browser tests
global.initDOM = function () {

  // Create a DOM
  jsdom = require('jsdom');

  // create a jQuery instance
  jQuery = require('jquery').create();
  global.jQuery = global.$ = jQuery;

  // Create window
  window = jsdom.jsdom().createWindow('<html><body></body></html>')

  // Set up global references for DOMDocument+jQuery
  global.document = window.document;

  // add addEventListener for coffeescript compatibility:
  global.addEventListener = window.addEventListener
}

// Test helper: set up Backbone.js with a browser-like environment
global.initBackbone = function () {

  // Get a headless DOM ready for action
  global.initDOM();

  // add Backbone to global namespace and tell it to use jQuery
  global.Backbone = require('backbone');
  global.Backbone.setDomLibrary(jQuery);
}

// require specs and run them with Jasmine as soon as they're loaded
requirejs(specs, function () {

  // tell Jasmine to use the boring console reporter:
    jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());

  // execute all specs
    jasmine.getEnv().execute();
}, function (err) {
  console.log(err);
  //The errback, error callback
  //The error has a list of modules that failed
  var failedId = err.requireModules && err.requireModules[0];
});