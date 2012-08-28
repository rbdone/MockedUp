# MockedUp
==========

A plugin for RequireJS that loads a module and mocks the module's dependencies. Most useful for unit testing. This will benefit those who do not want to maintain a billion config files or a separate test-code base.

## Current Stable Version
0.0.0   [![Build Status](https://secure.travis-ci.org/jmdobry/MockedUp.png)](http://travis-ci.org/jmdobry/MockedUp)

## Getting Started

(Eventually. Not Published Yet.)
* `npm install mockedup`
* I'll also include a distribution file that can be used outside of the nodeJS environment.

## Usage

`define(['mockedup!myModule'], function (myModule) { ...`

`myModule` will then be available as normal, but its dependencies will be mocked (and their dependencies mocked, and so on). 

## Roadmap

#### [0.0.1](https://github.com/jmdobry/MockedUp/issues?milestone=1)
* Initial AST traversal function

## Bugs

Help me by submitting an issue that describes how you encountered it. Please be as specific as possible including operating system, browser, node, requirejs versions.

## Contributing

Right now this project reflects my personal tastes, but I am constantly trying to make it faster, cleaner, and better. So I am open to suggestions! I try to keep my code clean and readable so anyone can fork it and run with it.

#### Checklist

1. Ensure your code meets the submission guidelines.
2. Ensure your code follows the code style guide.

#### Submission Guidelines

* code should work out of box, cross platform, cross browser with a simple `npm install`
* code should fill a need/want and be pure JavaScript
* code should include tests that cover, at minimal, its basic features; preferrably fully unit tested.

#### Code Style Guide

* Basically, all code in any code-base should look like a single person typed it, no matter how many people contributed.
* see [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/jmdobry/idiomatic.js)

#### Tests

* see existing tests for guidance

#### Running Tests
```bash
npm install
npm test
```

## Release History

see [CHANGELOG](/jmdobry/MockedUp/blob/master/CHANGELOG.md).

## License
Copyright (c) 2012 Jason Dobry.
Licensed under the MIT license.

see [LICENSE](/jmdobry/MockedUp/blob/master/LICENSE-MIT.md).