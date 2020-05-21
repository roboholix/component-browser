<h1 align="center">Component Browser</h1>

<p align="center">
  <img src="https://img.shields.io/david/roboholix/component-browser?style=for-the-badge" />
  <img src="https://img.shields.io/david/dev/roboholix/component-browser?style=for-the-badge" />
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge" />
  <img src="https://img.shields.io/codecov/c/github/roboholix/component-browser/master.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/roboholix/component-browser?style=for-the-badge" />
  <img src="https://img.shields.io/node/v/@roboholix/component-browser?style=for-the-badge" />
  <img src="https://img.shields.io/npm/v/@roboholix/component-browser?style=for-the-badge" />
  <img src="https://img.shields.io/github/repo-size/roboholix/component-browser?style=for-the-badge" />
  <img src="https://img.shields.io/snyk/vulnerabilities/github/roboholix/component-browser?style=for-the-badge" />    
</p>

---

> A component browser to prototype, demo, document, and publish React components

Platform | CI Status
---------|:---------
Linux    | ![Linux Build Status](https://travis-ci.com/roboholix/component-browser.svg?env=BADGE=linux&label=build&branch=master)
OSX      | ![OSX Build Status](https://travis-ci.com/roboholix/component-browser.svg?env=BADGE=osx&label=build&branch=master)
Windows  | ![Windows Build status](https://ci.appveyor.com/api/projects/status/484jp2fhlpxmrjoi?svg=true)

## Quick-start Demo (with example code)
See a [live demo](https://roboholix.github.io/component-browser/) of the components

The demo component browser includes:
- Rendered example components that are included in this library
- Code snippets used to generate the example components
- Component prop options, including default values and requirements

## Table of Contents
 * [Pre-requisites](#pre-requisites)
 * [Installation](#installation)
    * [Git Install](#git-install)
    * [Zip File Install](#zip-file-install)
 * [Documentation Building](#documentation-building)
 * [Running the Project](#running-the-project)
 * [Project Details](#project-details)
    * [Components Folder](#components-folder)
    * [Documentation Folder](#documentation-folder)
 * [Testing](#testing)
   * [Unit Tests](#unit-tests)
   * [End-to-end Tests](#end-to-end-tests)
   * [Snapshot Tests](#snapshot-tests)
 * [Code Coverage](#code-coverage)
   * [Unit Testing Coverage](#unit-testing-coverage)
   * [End-to-end Coverage](#end-to-end-coverage)
   * [Combining Coverage Reports](#combining-coverage-reports)
 * [Webpack](#Webpack)
   * [Development](#development)
   * [Production](#production)
     * [Bundle Analyizer](#bundle-analyizer)
 * [Releasing](#releasing)
 * [Deployment](#deployment)
   * [Npm packages](#npm-packages)
     * [Publishing](#publishing)
   * [Github](#github)
   * [Github Pages](#github-pages)
 * [Folder Structure](#folder-structure)
 * [Documentation Upkeep](#documentation-upkeep)
 * [Contributing](#contributing)
 * [Troubleshooting](#troubleshooting)
    * [npm errors or EADDRINUSE](#npm-errors-or-eaddrinuse)
    * [No documentation or errors related to documentation building](#no-documentation-or-errors-related-to-documentation-building)
    * [Other build issues](#other-build-issues)
    * [Missing dependencies](#missing-dependencies)
 * [Bug Reporting](#bug-reporting)

## Pre-requisites
The following applications must be installed on your machine prior to installation
- [node](https://nodejs.org/en/download/) (>= version 10.x.x)
- npm
- [git](https://git-scm.com/downloads)

## Installation
Choose one of the following ways below to install the project (Git or .zip)

### Git Install
1. In a terminal, change to a directory you would like to clone this project into
`cd <YOUR_DIRECTORY>`
2. Clone the project
`git clone https://github.com/roboholix/component-browser.git`
2. Change into the project directory and run:
`cd component-browser && npm install`

### Zip File Install
*Skip if you ran the `git clone` command above*

1. Download the [.zip
file](https://github.com/roboholix/component-browser/archive/master.zip).
2. Extract the `.zip` file contents with your unzipping tool of choice
3. In a terminal, change to the directory of the unzipped project
`cd /path/to/your/project`

## Documentation building
`npm run build:docs`

Files in the `./src/docs` folder have a standardized format of code commenting
used to extract and generate documentation for sample components running in the
component browser.

## Running the project
If you haven't already, run the `build:all` command to build a plethora of things
including documentation, compiled css files, lib, dist, etc.

1. `npm run build:all`

Then, run the following command in your terminal:

2. `npm start`

Your default browser should automatically open up to the UI along with the server.

- UI - Runs on "http://localhost:8080"

## Project Details
This project serves as a React component prototyper, tester, component browser and 
npm package publisher all-in-one.


### Components Folder
`./src/components/`

### Documentation Folder
`./src/docs`

A folder containing example components to serve as "living documentation" when
browsing components through the component browser.

## Testing
Unit testing and end-to-end testing has been setup for this repo.

Run `npm test` for both unit and end-to-end tests to run.

### Unit Tests
Jest has been used for the test framework.

Tests should be placed along with each component, using a `*.spec.js` filename.

### End-to-end Tests
Cypress has been chosen for end-to-end testing.

Component specific Cypress tests should be placed in the component folder with a 
filename of `*.cypress.spec.js`, alongside any other unit tests that may exist 
for that component.

Globally applicable e2e tests should be placed in the `/cypress/integration/` folder 
with a filename of `*.cypress.spec.js`.

### Snapshot Tests
Jest snapshot testing is utilized in this repo.

Snapshot tests are stored in a component's `__snapshots__` folder, with a filename
of `*.spec.js.snap`.

## Code Coverage
Code coverage is available and ready for e2e and unit testing.

### Unit Testing Coverage
To manually run jest unit test coverage reports type the following command into 
your terminal:

`npm run test:jest`

Jest reports will be output to the `jest-coverage` directory of this project.

### End-to-end Coverage
To manually run cypress end-to-end test coverage reports type the following command into 
your terminal:

`npm run test:cy`

Cypress coverage reports will be output to the `cypress-coverage` directory of this project.

### Combining Coverage Reports
`npm run test`, `npm test`, or just `npm t` will all run unit and e2e tests with coverage
reports, and combine the coverage reports (via the `posttest` npm script) into the
`coverage` directory of this project.

Run `npm run test:open-coverage` to see a combined report of unit test and end-to-end test coverage.

The combined coverage strategy used in this repo was taken from examples and directions 
at [https://github.com/bahmutov/cypress-and-jest/blob/master/package.json](https://github.com/bahmutov/cypress-and-jest/blob/master/package.json).

## Webpack
Common webpack build tasks between development and production modes are stored in the 
`webpack.common.js` file.

### Development
Development webpack build tasks are specified in the `webpack.dev.js` file.

### Production
Production webpack build tasks are specified in the `webpack.prod.js` file.

#### Bundle Analyizer
To view a detailed visual analysis of the production build bundle, run the following command:
`npm run analyze-bundle`

## Releasing
To run a changelog update:
`curl -H "Accept: application/json" -H "Authorization: token ${GITHUB_TOKEN}" --request POST --data '{"event_type": "autochangelog"}' https://api.github.com/repos/roboholix/component-browser/dispatches`

See `.github/workflows/*yml` for details on GitHub actions that handle automated releasing tasks 
and CHANGELOG.md updates.

## Deployment
To deploy "living" documentation to gh-pages run:
`npm deploy:docs`

### Npm packages
* IMPORTANT! READ ON...*

The `package.json` in the root directory of this repo is a *TEMPLATE* to generate the package.json
that ends up getting published to npm.

To see the `package.json` contents for the published package, you must first have ran the
`npm run build:lib` command. After running the lib build task, you can view the generated
npm release's `package.json` in `/lib/package.json`.

#### Publishing
1. Merge and commit changes for new release
2. Increment `/package.json`'s version
3. Run `npm run build:lib`
4. Commit changes
5. Push changes to master branch
6. In the root directory of this repo, run `cd lib && npm publish && cd ..`

### Github
[https://github.com/roboholix/component-browser/](https://github.com/roboholix/component-browser/)

### Github Pages
[https://roboholix.github.io/component-browser/](https://roboholix.github.io/component-browser/)

## Folder Structure

## Documentation Upkeep
- "Living" documentation should be published to Github's gh-pages at [https://roboholix.github.io/component-browser/](https://roboholix.github.io/component-browser/)

## Contributing
[Contributing](/CONTRIBUTING.md)

## Troubleshooting

### npm errors or `EADDRINUSE`

EADDRINUSE means another process is using the same port you are trying to run
this project on. Attempt to find which other process is using port 8080. 
Most likely the other process will be a previous instance of node, perhaps this
same project still running a `npm start` in another terminal.

Try killing the other process using port 8080 and try again.

For other errors, try running `npm install` again.

### No documentation or errors related to documentation building
Try running  `npm run build:docs`

### Other build issues
Ensure you have all of the tools installed on your system under the [Pre-requisites](#pre-requisites) section.

### Missing dependencies
Run `npm install` again. If that fails, try removing the project's `node_modules` directory
and run `npm install` again.

## Bug Reporting
Still having issues?

Click [here](https://github.com/roboholix/component-browser/issues/new) to report any bugs or open a general issue with this package.
