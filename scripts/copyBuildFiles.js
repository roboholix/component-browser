const path = require("path");
const fse = require("fs-extra");

const files = ["README_TEMPLATE_FOR_PACKAGE_RELEASE.md", "LICENSE.md"];

/* eslint-disable no-console */
console.log(`

LIB BUILD TASKS
------------------------------
1. Write build to /lib 
2. Write package.json to /lib 
3. Copy relevant files to /lib 
4. Run "npm publish" from /lib

For more details, view the source code in /scripts/copyBuildFiles.js

`);
/* eslint-enable no-console */

Promise.all(
  /* eslint-disable array-callback-return */
  files.map((file) => {
    let newFileName = file;

    if (file === "README_TEMPLATE_FOR_PACKAGE_RELEASE.md") {
      newFileName = "README.md";
    }

    copyFile(file, newFileName);
  })
  /* eslint-enable array-callback-return */
).then(() => createPackageFile());

function copyFile(file, newFileName = file) {
  const libPath = resolveBuildPath(newFileName);
  return new Promise((resolve) => {
    fse.copy(file, libPath, (err) => {
      if (err) throw err;
      resolve();
    });
  }).then(() => console.log(`Copied ${file} to ${libPath}`)); // eslint-disable-line no-console
}

function resolveBuildPath(file) {
  return path.resolve(__dirname, "../lib/", path.basename(file));
}

function createPackageFile() {
  return new Promise((resolve) => {
    fse.readFile(
      path.resolve(__dirname, "../package.json"),
      "utf8",
      (err, data) => {
        if (err) {
          throw err;
        }

        resolve(data);
      }
    );
  })
    .then((data) => JSON.parse(data))
    .then((packageData) => {
      const {
        author,
        version,
        description,
        keywords,
        engines,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
      } = packageData;

      const minimalPackage = {
        name: "@roboholix/component-browser",
        author,
        version,
        description,
        main: "./index.js",
        keywords,
        engines,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
      };

      /**
       * Copy README.md and LICENSE.md to /lib and write a new package.json to /lib
       *
       * All of this is done just so you don't have to specify a /lib in your import if you only want
       * a specific comopnent.
       *
       * So you can just do `import PackageName from '@roboholix/component-browser/PackageName`
       * instead of `import PackageName from '@roboholix/component-browser/lib/PackageName`
       */
      return new Promise((resolve) => {
        const libPath = path.resolve(__dirname, "../lib/package.json");
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(libPath, data, (err) => {
          if (err) throw err;
          console.log(`Created package.json in ${libPath}`); // eslint-disable-line no-console
          resolve();
        });
      });
    });
}
