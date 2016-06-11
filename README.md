Functional JavaScript Snippets
=========

Code snippets to illustrate a "functional" approach to writing JavaScript.

## Getting Started
To get started, clone this repository to your machine and download UnderscoreJS:

```sh
$ git clone https://github.com/chrispaynes/functional_javascript.git
$ cd functional_javascript
$ npm install
```

## Usage

Each file contains multiple function calls and their respective console output. Uncomment the function call you wish to use before executing the file.<br />
<b>NOTE:</b> Some function calls were designed to throw an error to the console.<br />
<b>NOTE:</b> Many functions with a leading `_.` will require the [UnderscoreJS library][2]:
```sh
var _ = require('../node_modules/underscore/underscore-min.js');

  if (_.isNaN(a)) {
    warn(["Could not parse age:", age].join(" "));
    a = 0;
  }
```

#### Within the Interactive Node Shell:

```sh
$ cd functional_javascript
$ node 01_functions_as_abstraction_units.js
  =>NOTE: Attempting to parse an age
  =>50
```

#### Within the Sublime Text Console:
[Creating a JavaScript console in Sublime Text][5].

#### With an Online Code Editor:
Paste the code in your preferred online JavaScript code editor like [JSFiddle][6], [CodePen][7] or others.


## Credit

The JavaScript code within this repo is based on code snippets featured in [Functional JavaScript][1] - written by [Michael Fogus][8]. Portions of this code rely on the [UnderscoreJS library][2] written by [Jeremy Ashkenas][4].

## Links

  * [Functional JavaScript - by Michael Fogus][1]
  * [Underscore.js][2]
  * [Underscore.js (Github Repository)][3]
  * [Jeremy Ashkenas][4]
  * [Creating A JavaScript Console in Sublime Text][5]
  * [JSfiddle][6]
  * [CodePen][7]      

  [1]: http://shop.oreilly.com/product/0636920028857.do
  [2]: http://underscorejs.org/
  [3]: https://github.com/jashkenas/underscore
  [4]: https://github.com/jashkenas
  [5]: http://www.wikihow.com/Create-a-Javascript-Console-in-Sublime-Text
  [6]: https://jsfiddle.net/
  [7]: http://codepen.io/
  [8]: https://github.com/fogus
