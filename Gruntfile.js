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
            },
            reports: {
                options: {
                    port: 9003,
                    base: 'report/dalek',
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
            dalekjsAdvanced: {
                options: {
                    stdout: true,
                    failOnError: true
                },
                command: 'dalek tests/advanced/*.js'
            },
            dalekjsCoffee: {
                options: {
                    stdout: true,
                    failOnError: true
                },
                command: 'dalek tests/*.coffee'
            },
            dalekjsMultiple: {
                options: {
                    stdout: true,
                    failOnError: true
                },
                command: 'dalek tests/*.js -b phantomjs,chrome -r console,html'
            },
            dalekjsChrome: {
                options: {
                    stdout: true,
                    failOnError: true
                },
                command: 'dalek tests/*.js -b chrome'
            },
            dalekjsHtmlreport: {
                options: {
                    stdout: true,
                    failOnError: true
                },
                command: 'dalek tests/*.js -r console,html'
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

    grunt.registerTask('reports', [
        'connect:reports'
    ]);

    grunt.registerTask('dalek', [
        'connect:server',
        'shell:dalekjs'
    ]);
    grunt.registerTask('dalek_advanced', [
        'connect:server',
        'shell:dalekjsAdvanced'
    ]);

    grunt.registerTask('dalek_coffee', [
        'connect:server',
        'shell:dalekjsCoffee'
    ]);


    grunt.registerTask('dalek_htmlreport', [
        'connect:server',
        'shell:dalekjsHtmlreport'
    ]);

    grunt.registerTask('dalek_chrome', [
        'connect:server',
        'shell:dalekjsChrome'
    ]);

    grunt.registerTask('dalek_firefox', [
        'connect:server',
        'shell:dalekjsFirefox'
    ]);

    grunt.registerTask('dalek_multiple', [
        'connect:server',
        'shell:dalekjsMultiple'
    ]);
};