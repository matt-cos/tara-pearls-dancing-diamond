module.exports = function(grunt) {
    //https://24ways.org/2013/grunt-is-not-weird-and-hard/
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: [
                    'js/libs/*.js', // All JS in the libs folder
                    'js/script.js'  // This specific file
                ],
                dest: 'js/build/production.js',
            }
        },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },
        less: {
            development: {
                options: {
                    paths: ['/css']
                },
                files: {
                    'css/style.css': 'css/less/style.less'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['js/libs/*.js', 'js/script.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['css/less/style.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            },
            images: {
                files: ['images/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['index.html'],
                options: {
                    livereload: true
                }
            }   
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'less']);

};