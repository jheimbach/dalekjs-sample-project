module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'htdocs'
                }
            },
            preview: {
                options: {
                    port: 9002,
                    base: 'htdocs',
                    keepalive: true
                }
            }
        },
        shell: {
            dalekjs: {
                options: {
                    stdout: true,
                    failOnError: true
                },
                command: 'dalek tests/*.js'
            },
            dalekjsCoffee: {
                options: {
                    stdout: true,
                    failOnError: true
                },
                command: 'dalek tests/*.coffee'
            },
            dalekjsChrome: {
                options: {
                    stdout: true,
                    failOnError: true
                },
                command: 'dalek tests/*.js -b chrome'
            },
            dalekjsFirefox: {
                options: {
                    stdout: true,
                    failOnError: true
                },
                command: 'dalek tests/*.js -b firefox'
            }
        }
    });

    grunt.registerTask('preview', [
        'connect:preview'
    ]);

    grunt.registerTask('dalek', [
        'connect:server',
        'shell:dalekjs'
    ]);

    grunt.registerTask('dalek_coffee', [
        'connect:server',
        'shell:dalekjsCoffee'
    ]);

    grunt.registerTask('dalek_chrome', [
        'connect:server',
        'shell:dalekjsChrome'
    ]);

    grunt.registerTask('dalek_firefox', [
        'connect:server',
        'shell:dalekjsFirefox'
    ]);
};