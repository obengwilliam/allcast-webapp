'use strict';

module.exports = function(grunt)
{
    /**
    * The module loads all grunt-* modules as specified in the package.json
    *(devDependencies, dependencies, peerDependencies).
    */
    require('load-grunt-tasks')(grunt);
    /**
    * load build configuration file
    */
    var userConfig = require('./build.config.js');

    /**
    * This is configuration grunt uses to configure grunt plugins you.
    */
    // taskconfig
    var taskConfig={
        /**
        * Load in package.json to access package names and versions.
        */
        pkg:grunt.file.readJSON('package.json'),

        /**
        * The meta contains comment to be placed on top of our source files.
        * nb. it is first processed as a grunt template.
        * the <%= pairs are replaced with values as stated in the configuration object.
        */

        meta:{
            banner:'/**\n' +
            ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' *\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
            ' */\n'

        },
        /**
        * This refers to files that contains logs record
        * due to changes made to our project. These logs are refers to
        * commit on bug fixes, new features based on a conventional-changelog.
        */
        changelog:{
            options:{
                dest: 'CHANGELOG.md',
                template: 'changelog.tpl'
            }
        },
        /**
        * The files to delete when grunt clean
        */
        clean:[
            '<%= buildDir%>',
            '<%= compileDir %>'
        ],
        /**
         * The copy task just copies files from src to buildDir.
         */
        copy: {
            buildAppAssets: {
                files: [{
                    src: [ '**', '!css/**' ],
                    dest: '<%= buildDir %>/assets/',
                    cwd: 'src/assets',
                    expand: true
                }]
            },
            buildAppCss: {
                files: [{
                    src: [ '**'],
                    dest: '<%= buildDir %>/assets/',
                    cwd: 'src/css',
                    expand: true
                }]
            },
            buildVendorAssets:{
                files:[{
                    src:['<%=vendorFiles.assets %>'],
                    dest:'<%=buildDir %>/assets/',
                    cwd:'.',
                    expand: true,
                    flatten:true
                }]
            },
            buildAppjs: {
                files: [{
                    src: [ '<%=appFiles.js %>' ],
                    dest: '<%= buildDir %>/',
                    cwd: '.',
                    expand: true
                }]
            },

            buildVendorjs: {
                files: [{
                    src: [ '<%= vendorFiles.js %>'],
                    dest: '<%= buildDir%>/',
                    cwd: '.',
                    expand: true
                }]
            },

            compileAssets:{
                files:[{
                    src:['**'],
                    dest:'<%= compileDir %>/assets',
                    cwd:'<%=buildDir%>/assets',
                    expand:true
                }]
            }


        },
        /*todo: add compile vendorassets and compileappassets*/


        /**
        *  concatenates multiple source files into one using grunt-concat
        */

        concat:
        {
            buildVendorCss:{
                src:[
                    '<%= vendorFiles.css %>',
                    '<%= buildDir %>/assets/<%= pkg.name %>-<%= pkg.version %>-vendor.css'
                ],
                dest: '<%= buildDir %>/assets/<%= pkg.name %>-<%= pkg.version %>-vendor.css'

            },
            buildAppCss:{
                src:[
                    '<%= appFiles.css %>',
                    '<%= buildDir %>/assets/<%= pkg.name %>-<%= pkg.version %>-app.css'
                ],
                dest: '<%= buildDir %>/assets/<%= pkg.name %>-<%= pkg.version %>-app.css'

            },
             /**
            * The compileJs target is the concatenation of our application source
            * code and all specified vendor source code into a single file.
            */

            compileJs:{
                options:{
                    banner:'<%= meta.banner %>'
                },

                src: [
                    '<%=vendorFiles.js%>',
                    'module.prefix',
                    '<%= buildDir %>/src/**/*.js',
                    '<%= html2js.app.dest %>',
                    '<%= html2js.common.dest %>',
                    'module.suffix'
                ],

                dest: '<%= compileDir %>/assets/<%= pkg.name %>-<%= pkg.version %>.js'
            }

        },

         /**
         * `ng-min` annotates the sources before minifying. That is, it allows us
         * to code without the array syntax.
         */
        ngmin: {
            compile: {
                files: [{
                    src: [ '<%= appFiles.js %>' ],
                    cwd: '<%= buildDir %>',
                    dest: '<%= buildDir%>',
                    expand: true
                }]
            }
        },

        /**
        * Minify the sources!
        */
        uglify: {
            compile: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                files: {
                    '<%= concat.compileJs.dest %>': '<%= concat.compileJs.dest %>'
                }
            }
        },


        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            src:['<%= appFiles.js %>'],
            test:['<%= appFiles.jsunit %>'],
            gruntFile:['gruntfile.js'],
            buildConfig:['build.config.js'],

        },
        /*
        *todo: configure karma
        */
        /**
         * HTML2JS is a Grunt plugin that takes all of your template files and
         * places them into JavaScript files as strings that are added to
         * AngularJS's template cache. This means that the templates too become
         * part of the initial payload as one JavaScript file. Awesome!
         */

        html2js: {
        /**
        * These are the templates from src/app.
        */
            app:{
                options: {
                    base: 'src/app'
                },
                src: [ '<%= appFiles.atpl %>' ],
                dest: '<%= buildDir %>/templates-app.js'
            },

          /**
           * These are the templates from src/appp/common
           */
            common: {
                options: {
                    base: 'src/common'
                },
                src: [ '<%= appFiles.ctpl %>' ],
                dest: '<%= buildDir %>/templates-common.js'
            }
        },

          /**
         * The index task compiles the index.html file as a Grunt template. CSS
         * and JS files co-exist here but they get split apart later.
         */

        index:{
            build: {
                dir: '<%= buildDir %>',
                src: [
                    '<%= vendorFiles.js %>',
                    '<%= buildDir %>/src/app/**/*.js',
                    '<%= buildDir %>/src/common/**/*.js',
                    '<%= html2js.common.dest %>',
                    '<%= html2js.app.dest %>',
                    '<%= buildDir %>/assets/<%= pkg.name %>-<%= pkg.version %>-vendor.css',
                    '<%= buildDir %>/assets/<%= pkg.name %>-<%= pkg.version %>-app.css'
                ]
            },
             /**
               * When it is time to have a completely compiled application, we can
               * alter the above to include only a single JavaScript and a single CSS
               * file. Now we're back!
               */
            compile: {
                dir: '<%= compileDir %>',
                src: [
                    '<%= concat.compileJs.dest %>',
                    '<%= vendorFiles.css %>',
                    '<%= buildDir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
                ]
            },
        },

        delta:{
            options:{
                livereload:true
            },

            html:{
                files:['<%= appFiles.html %>'],
                tasks:['index:build']
            },
            css:{
                files:['<%= appFiles.css %>'],
                tasks:['index:build']
            },

            gruntfile:{
                files:'gruntfile.js',
                tasks:['jshint:gruntFile','build'],
                options:{
                    livereload:false
                }
            },

            tpls:{
                files:['<%=appFiles.atpl %>','<%= appFiles.ctpl %>'],
                tasks:['html2js']
            },

            buildConfig:{
                files:'build.config.js',
                tasks:['jshint:buildConfig','build']
            },
            /**
            *
            */
            jssrc:{
                files:['<%= appFiles.js %>'],
                tasks:['jshint:src','copy:buildAppjs']
                /*todo: run test after jshint:src*/
            },
            /**
            *
            */
            jsunit:{
                files:['<%= appFiles.jsunit %>'],
                tasks:['jshint:test'],
                options:{
                    livereload:false
                }
                /*todo: run test after jshint:src*/
            },

            assets:{
                files: [
                    'src/assets/**/*'
                ],
                tasks: [ 'copy:buildAppAssets', 'copy:buildVendorAssets' ]
            }

        },

        ngconstant: {
            // Options for all targets
            options: {
                space: '  ',
                wrap: '"use strict";\n\n {%= __ngModule %}',
                name: 'allcast.server-config',
            },
          // Environment targets

            development: {
                options: {
                    dest: 'src/app/server-config.js'
                },

                constants: {
                    ENV: {
                        name:'development',
                        API_SERVER:'http://localhost:3000/api/v1.0/',
                        SOCKET_SERVER:'http://localhost:3000/'

                    }
                }
            },

            production: {
                options: {
                    dest: 'src/app/server-config.js'
                },

                constants: {
                    ENV: {
                        name:'production',
                        API_SERVER:'htp://allcast-signal-server-stage.herokuapp.com/api/v1.0/'
                    }
                }
            },
            staging: {
                options: {
                    dest: 'src/app/server-config.js'
                },

                constants: {
                    ENV: {
                        name:'staging',
                        API_SERVER:'http://allcast-signal-server-stage.herokuapp.com/api/v1.0/',
                        SOCKET_SERVER:'http://allcast-signal-server-stage.herokuapp.com/'

                    }
                }
            }
        },

        connect: {
            options: {
                port: 8080,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: 'build'
                }
            }
        },
        shell:{
            'checkout':{
                command:['git checkout development'],
                options:{
                    stadout:true
                }
            },
            'merge':{
                command: ['git checkout staging', 'git merge development'],
                options:{
                    stadout:true
                }

            },
            'push':{
                command:['git push staging staging:master'],
                options:{
                    stadout:true
                }
            }

        }
    };

    // endoftaskconfig

    /**
    * Initializing configuration object for paysail.
    */


    grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

    /**
    * A utility function to get all app JavaScript sources.
    */
    function filterForJS ( files ) {
        return files.filter( function ( file ) {
            return file.match( /\.js$/ );
        });
    }


    /**
    * A utility function to get all app CSS sources.
    */
    function filterForCSS ( files ) {
        return files.filter( function ( file ) {
            console.log(file);
            return file.match( /\.css$/ );
        });
    }


    grunt.renameTask('watch','delta');
    // todo:add karma:unit
    grunt.registerTask('watch',['build','delta']);

    grunt.registerTask('deploy',['shell:checkout']);

    /**
    * The default task is to build and compile
    */

    grunt.registerTask( 'default', [ 'build','compile'] );
    // todo:add compile task

    grunt.registerTask( 'build', [
        'clean', 'html2js', 'jshint','concat:buildVendorCss',
        'copy:buildAppAssets','copy:buildAppCss', 'copy:buildVendorAssets',
        'copy:buildAppjs', 'copy:buildVendorjs','ngconstant:development','index:build'

    ]);



     /**
   * The `compile` task gets your app ready for deployment by concatenating and
   * minifying your code.
   */
    grunt.registerTask( 'compile', [
        'copy:compileAssets', 'ngmin',
        'concat:compileJs', 'uglify','ngconstant:development','index:compile'
    ]);


    grunt.registerTask('serve', [
        'connect:livereload',
        'watch'
    ]);

    /**
    *todo: add karmaconfig and karma:continuous
    */



    grunt.registerMultiTask( 'index', 'Process index.html template', function () {
        var dirRE = new RegExp( '^('+grunt.config('buildDir')+'|'+grunt.config('compileDir')+')\/', 'g' );

        var jsFiles = filterForJS( this.filesSrc ).map( function ( file ) {
            return file.replace( dirRE, '' );
        });


        var cssFiles = filterForCSS( this.filesSrc ).map( function ( file ) {
            return file.replace( dirRE, '' );
        });

        console.log(cssFiles);



        grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
            process: function ( contents) {
                return grunt.template.process( contents, {
                    data: {
                        scripts: jsFiles,
                        styles: cssFiles,
                        version: grunt.config( 'pkg.version' )
                    }
                });
            }
        });
    });




};
