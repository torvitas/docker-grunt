module.exports = function(grunt) {
    require('load-grunt-config')(grunt, {
        configPath: '/home/node/vendor/',
        overridePath: '/home/node/config/',
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}
