module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'dist/css/<%= pkg.name %>.<%= pkg.version %>.css': 'sass/navi.scss',
                    'dist/css/<%= pkg.name %>-engage.<%= pkg.version %>.css': 'sass/engage/engage.scss'
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'dist/css/<%= pkg.name %>.<%= pkg.version %>.min.css': ['dist/css/<%= pkg.name %>.<%= pkg.version %>.css'],
                    'dist/css/<%= pkg.name %>-engage.<%= pkg.version %>.min.css': ['dist/css/<%= pkg.name %>-engage.<%= pkg.version %>.css']
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: false,
                    src: 'node_modules/highlight.js/styles/github.css',
                    dest: 'css/github.css'
                }]
            }
        },
        watch: {
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass', 'cssmin', 'copy']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'cssmin', 'copy', 'watch']);

};
