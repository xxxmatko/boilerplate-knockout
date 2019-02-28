module.exports = function (grunt) {
    //#region [ Configuration ]

    grunt.config("clean", {
        wwwroot: [
            "wwwroot/**/*"
        ],
        dependencies: [
            "js/libs/*",
            "css/materialize.css",
            "css/leaflet.css"
        ],
        css: [
            "wwwroot/css/*",
            "!wwwroot/css/site.css"
        ],
        cssmin: [
            "wwwroot/css/*",
            "!wwwroot/css/site.min.css"
        ],
        componentshtml: [
            "wwwroot/js/components/**/*.html"
        ]
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-contrib-clean");

    //#endregion
};