/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const { wrapRollupPlugin } = require('es-dev-server-rollup');
const replace = require('@rollup/plugin-replace');
const merge = require('deepmerge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        {
          pattern: config.grep
            ? config.grep
            : 'packages/ds-container/out-tsc/test/*.test.js',
          type: 'module',
        },
      ],

      esm: {
        nodeResolve: true,
        coverage: true,
        preserveSymlinks: true,
        plugins: [
          wrapRollupPlugin(
            replace({
              'process.env.NODE_ENV': JSON.stringify('production'),
            })
          ),
        ],
      },
      basePath: '../../',
      // you can overwrite/extend the config further
      reporters: ['junit', 'progress', 'json'],
      jsonReporter: {
        stdout: false,
        outputFile: 'coverage/ds-container-coverage.json', // defaults to none
      },
      junitReporter: {
        outputDir: 'coverage', // results will be saved as $outputDir/$browserName.xml
        outputFile: 'ds-container-junit.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
        suite: '', // suite will become the package name attribute in xml testsuite element
        useBrowserName: false, // add browser name to report and classes names
        nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
        classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
        properties: {}, // key value pair of properties to add to the <properties> section of the report
        xmlVersion: null, // use '1' if reporting to be per SonarQube 6.2 XML format
      },
    })
  );
  return config;
};
