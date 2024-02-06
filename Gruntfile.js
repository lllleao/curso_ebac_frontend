module.exports = function(grunt) {
    grunt.initConfig({
        pk: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['less'])
    grunt.registerTask('build', ['uglify'])
}
