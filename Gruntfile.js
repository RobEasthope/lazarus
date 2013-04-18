'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/themes/saffron/js/*.js',
        'assets/themes/saffron/js/plugins/*.js',
        '!assets/themes/saffron/js/scripts.min.js'
      ]
    },
    recess: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'assets/themes/saffron/css/main.min.css': [
            'assets/themes/saffron/css/less/bootstrap/bootstrap.less',
            'assets/themes/saffron/css/less/retina/retina.less',
            'assets/themes/saffron/css/less/app.less'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/themes/saffron/js/scripts.min.js': [
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-transition.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-alert.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-button.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-carousel.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-collapse.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-dropdown.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-modal.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-tooltip.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-popover.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-scrollspy.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-tab.js',
            'assets/themes/saffron/js/plugins/bootstrap/bootstrap-typehead.js',
            'assets/themes/saffron/js/plugins/retina/retina.js',
            'assets/themes/saffron/js/plugins/*.js',
            'assets/themes/saffron/js/_*.js'
          ]
        }
      }
    },
    watch: {
      less: {
        files: [
          'assets/themes/saffron/css/less/*.less',
          'assets/themes/saffron/css/less/bootstrap/*.less',
          'assets/themes/saffron/css/less/retina/*.less'
        ],
        tasks: ['recess']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify', 'version']
      }
    },
    clean: {
      dist: [
        'assets/themes/saffron/css/main.min.css',
        'assets/themes/saffron/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'recess',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
