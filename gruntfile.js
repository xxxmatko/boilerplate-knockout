module.exports = function (grunt) {
    grunt.initConfig({
        package: grunt.file.readJSON("package.json"),
        homepage: "<HOMEPAGE>",
        configuration: "<CONFIGURATION>"
    });

    grunt.loadTasks("grunt");
};