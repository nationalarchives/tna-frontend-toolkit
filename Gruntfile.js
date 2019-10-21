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
                    'dist/css/tna.css': 'sass/tna.scss',
                    'dist/css/engagement.css': 'sass/engagement/theme.scss'
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'dist/css/tna.min.css': ['dist/css/tna.css'],
                    'dist/css/engagement.min.css': ['dist/css/engagement.css']
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