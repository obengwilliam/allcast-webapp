'use strict';

/** This module contains configuration for the build process using grunt*/

module.exports={
    /**
    * The buildDir is where our projects are compiled during development and
    * The compileDir is where our projects are compiled during production once
    * their completely built.
    */
    buildDir: 'build',
    compileDir:'bin',
    /*
    * This contains file patterns that refer to our app code.
    * `js` refers to js code in app except those in the vendor folder.
    * `chtml` refers to common reusable app's (`src/common`).
    * `html` refers to index.html
    *`ahtml` refers to reusable app's code.
    *jsunit refers to app's unit tests.
    */
    appFiles: {
        js: [ 'src/**/*.js', '!src/vendor/**/*.js'],
        css: [ 'src/app/**/*.css', 'src/css/**/*.css'],
        jsunit:['src/**/*.spec.js'],

        atpl: [ 'src/app/**/*.html' ],
        ctpl: [ 'src/common/**/*.html' ],

        html: [ 'src/index.html' ],
    },
    /**
    *This refers to files that contains vendor code to be used during testing only
    */
    testFiles:{
        js:['src/vendor/angular-mocks/angular-mocks.js']
    },
    /*
    * This refers to vendor files to be concatenated and minified with our project source files
    * during compilation and build phase.
    */
    vendorFiles: {
        js: [
              //you can change the bootstrap.min.js to include only the ones you used
                'vendor/jquery/dist/jquery.min.js',
                'vendor/niimantse/jquery.particleground.min.js',
                'vendor/bootstrap/js/dist/bootstrap.min.js',
                'vendor/angular/angular.js',
                'vendor/angular-ui-utils/ui-utils.min.js',
                'vendor/angular-ui-router/release/angular-ui-router.min.js',
                'vendor/angular-ui-utils/ui-utils.min.js'

            ],

            assets: [
            ],

            css:[
                'vendor/bootstrap/dist/css/bootstrap.min.css',

            ]
        }




    };