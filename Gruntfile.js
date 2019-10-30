module.exports = function (grunt) {

    var version =

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
        watch: {
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass', 'cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'cssmin', 'watch']);

};
