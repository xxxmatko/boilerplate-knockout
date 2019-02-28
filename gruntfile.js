module.exports = function (grunt) {
    //#region [ Config ]

    grunt.initConfig({
        package: grunt.file.readJSON("package.json"),
        homepage: "<HOMEPAGE>",
        configuration: "<CONFIGURATION>",
        clean: grunt.file.readJSON("tasks/clean.json")
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-rename-util");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-webfont");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-csslint");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-requirejs");

    grunt.registerTask("app-build", build);

    //#endregion


    //#region [ Tasks : Custom ]

    /**
     * Build task.
     */
    function build(configuration) {
        var version = grunt.config("package").version;

        grunt.log.writeln("Building \"" + configuration.toUpperCase() + "\" version \"" + version + "\"");

        // List of tasks
        var tasks = [
            "clean:wwwroot",
            "clean:dependencies"
        ];

        // Set up dynamic parameters
        switch(configuration.toUpperCase()) {
            case "DEBUG":
                grunt.config("configuration", "Debug");
                grunt.config("homepage", "http://localhost:8010/");
                break;
            case "RELEASE":
                grunt.config("configuration", "Release");
                grunt.config("homepage", "http://localhost:8011/");
                break;
            default:
                grunt.fail.fatal("Unknown build configuration '" + configuration.toUpperCase() + "'.");
            break;
        }

        // Run tasks
        grunt.task.run.apply(grunt.task, tasks);
    }

    //#endregion
};