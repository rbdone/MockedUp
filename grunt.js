module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // The clean task ensures all files are removed from the dist/ directory so
    // that no files linger from previous builds.
    clean: [
      "dist/"
    ],

    pkg: '<json:package.json>',
    // The lint task will run the build configuration and the application
    // JavaScript through JSHint and report any errors.  You can change the
    // options for this task, by reading this:
    // https://github.com/cowboy/grunt/blob/master/docs/task_lint.md
    lint: {
      files: [
        "grunt.js", "lib/**/*.js"
      ]
    },

    // The jshint option for scripturl is set to lax, because the anchor
    // override inside main.js needs to test for them so as to not accidentally
    // route.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    },

    // The concatenate task is used here to merge the almond require/define
    // shim and the templates into the application code.  It's named
    // dist/debug/require.js, because we want to only load one script file in
    // index.html.
    // concat: {
    //   "dist/debug/require.js": [
    //     "assets/js/libs/require.js",
    //     "dist/debug/main.js"
    //   ]
    // },

    // copy: {
    //   dist: {
    //     files: {
    //       "assets/js/libs/": "node_modules/requirejs/require.js"
    //     }
    //   }
    // },

    // Takes the built require.js file and minifies it for filesize benefits.
    min: {
      "dist/release/require.js": [
        "dist/debug/require.js"
      ]
    },

    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-jasmine-task');

  // The debug task will remove all contents inside the dist/ folder, lint
  // all your code, precompile all the underscore templates into
  // dist/debug/templates.js, compile all the application code into
  // dist/debug/require.js, and then concatenate the require/define shim
  // almond.js and dist/debug/templates.js into the require.js file.
  grunt.registerTask("debug", "clean lint concat");

  // The release task will run the debug tasks and then minify the
  // dist/debug/require.js file and CSS files.
  grunt.registerTask("release", "debug min compress");
};