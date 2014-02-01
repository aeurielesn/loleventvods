module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: 'dist'
    },
    less: {
      compile: {
        options: {
          strictMath: true,
          paths: ["less"]
        },
        files: {
          "dist/css/loleventvods.css": "less/loleventvods.less"
        }
      },
      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          "dist/css/loleventvods.min.css": "dist/css/loleventvods.css"
        }
      }
    }
  });

  // Load the plugins that provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

  // Distribution
  grunt.registerTask('dist', ['clean', 'less']);

  // Default task(s).
  grunt.registerTask('default', ['dist']);

};
