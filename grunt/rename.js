module.exports = function (grunt) {
    //#region [ Configuration ]

    grunt.config("rename", {
        dependencies: {
            files: [
                { src: ["js/libs/knockout-latest.debug.js"], dest: "js/libs/knockout.js" },
                { src: ["js/libs/leaflet-src.js"], dest: "js/libs/leaflet.js" },
                { src: ["js/libs/noframework.waypoints.js"], dest: "js/libs/waypoints.js" }
            ]
        },
        cssmin: {
            files: [
                { src: ["wwwroot/css/site.min.css"], dest: "wwwroot/css/site.css" }
            ]
        }
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-rename-util");

    //#endregion
};