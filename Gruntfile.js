module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'htdocs',
                    keepalive: true
                }
            }
        }
    });


    grunt.registerTask('server', [
        'connect:server'
    ]);
};