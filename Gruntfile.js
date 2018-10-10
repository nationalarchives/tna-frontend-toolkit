module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourcemap: 'none'
            },
            dist: {
                files: {
                    'tna-base/1.0/css/tna-base.css': 'sass/base-sass.scss',
                    'tna-base/1.0/css/tna-forms.css': 'sass/forms-sass.scss'
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'tna-base/1.0/css/tna-base.min.css': ['tna-base/1.0/css/tna-base.css'],
                    'tna-base/1.0/css/tna-forms.min.css': ['tna-base/1.0/css/tna-forms.css']
                }
            }
        },
        watch: {
            css: {
                files: 'sass/*.scss',
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