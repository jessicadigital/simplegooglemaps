module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        uglify:{
            js:{
                files:{
                    'dist/simplegooglemaps.min.js':[
                        'src/simplegooglemaps.js'
                    ]
                }
            }
        }
    });
    
    grunt.registerTask('default', ['uglify:js']);
};
