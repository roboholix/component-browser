<h1 align="center">Component Browser</h1>

<p align="center">
  <img src="https://img.shields.io/david/roboholix/component-browser?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/roboholix/component-browser?style=for-the-badge" />
  <img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2020?style=for-the-badge" />
  <img src="https://img.shields.io/node/v/@roboholix/component-browser?style=for-the-badge" />
  <img src="https://img.shields.io/snyk/vulnerabilities/github/roboholix/component-browser?style=for-the-badge" />    
</p>

---

A set of React components

Platform | CI Status
---------|:---------
Linux    | ![Linux Build Status](https://travis-ci.com/roboholix/component-browser.svg?env=BADGE=linux&label=build&branch=master)
OSX      | ![OSX Build Status](https://travis-ci.com/roboholix/component-browser.svg?env=BADGE=osx&label=build&branch=master)
Windows  | ![Windows Build status](https://ci.appveyor.com/api/projects/status/oetcg679y9o4xc7u?svg=true)

## Documentation (Live Demo)
See a [live demo](https://roboholix.github.io/component-browser/) of the components and their respective documentation.

The demo component browser includes:
- Rendered example components that are included in this library
- Code snippets used to generate the example components
- Component prop options, including default values and requirements

## Installation
`npm install @roboholix/component-browser`

## Components
See the component browser [demo](https://roboholix.github.io/component-browser/) for up-to-date
documentation and examples using latest version of `@roboholix/component-browser`.

## Useage

### Importing Individual Components

Choose *one* of the following ways to import or require a component into your project.

> :point_right: *Examples marked for production use will only import code needed for the specified component*

| Module Syntax | Example Code                                                                 | Production | Development |
| ---           | ---                                                                          | :---:      | :---:       |
| __import__    | `import MyButton from '@roboholix/component-browser/MyButton';`      | ✔          | ✔           |
| __import__    | `import { MyButton } from '@roboholix/component-browser';`               | ✗          | ✔           |
| __require__   | `const MyButton = require('@roboholix/component-browser/MyButton');` | ✔          | ✔           |
| __require__   | `const MyButton = require('@roboholix/component-browser').MyButton;` | ✗          | ✔           |

### Importing Multiple Components

```
// To only import code you need, you can import each individual component on their own
import MyButton from '@roboholix/component-browser/MyButton';
import MyHeader from '@roboholix/component-browser/MyHeader';
```

> :warning: *The following syntax will import the entire library (an additional ~5kb), 
instead of only code needed only for the components specified*

```
// Add MyButton and MyHeader to your project with ES module syntax
import { MyButton, MyHeader } from '@roboholix/component-browser';
```

```
// Add MyButton and MyHeader to your project with CommonJS syntax
const RoboholixComponents = require('@roboholix/component-browser');

const MyButton = RoboholixComponents.MyButton;
const MyHeader = RoboholixComponents.MyHeader;
```

```
const RoboholixComponents = require('@roboholix/component-browser');

const {
  MyButton,
  MyHeader
} = RoboholixComponents;
```

## Bug Reporting
Click [here](https://github.com/roboholix/component-browser/issues/new) to report any bugs or open an issue with this package.
