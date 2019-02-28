module.exports = function (grunt) {
    //#region [ Configuration ]

    grunt.config("requirejs", {
        // release: {
        //     options: {
        //         appDir: "./wwwroot",
        //         skipDirOptimize: true,
        //         writeBuildTxt: false,
        //         baseUrl: "./js",
        //         dir: "./wwwroot",
        //         keepBuildDir: true,
        //         allowSourceOverwrites: true,
        //         removeCombined: true,
        //         preserveLicenseComments: false,
        //         optimize: "uglify",
        //         inlineText: true,
        //         optimizeCss: "none",
        //         skipModuleInsertion: false,
        //         paths: {
        //             "requirejs": "./libs/require",
        //             "jquery": "./libs/jquery",
        //             "knockout": "./libs/knockout",
        //             "knockout.validation": "./libs/knockout.validation",
        //             "materialize": "./libs/materialize",
        //             "text": "./libs/text",
        //             "i18next": "./libs/i18next",
        //             "leaflet": "./libs/leaflet",
        //             "slick": "./libs/slick",
        //             "waypoints": "./libs/waypoints",
        //             "countUp": "./libs/countUp"
        //         },
        //         packages: [{
        //             name: "zy",
        //             location: "./"
        //         }, {
        //             name: "resources",
        //             location: "./resources"
        //         }],
        //         shim: {
        //             "waypoints": {
        //                 exports: "Waypoint"
        //             }
        //         },                    
        //         stubModules: ["text"],
        //         modules: [{
        //             name: "app",
        //             create: true,
        //             stubModules: ["text"],
        //             exclude: [
        //             ],
        //             include: [
        //                 "requirejs",
        //                 "zy/main",
        //                 "zy/components/app/app",
        //                 "zy/components/nav/nav",
        //                 "zy/components/map/map",
        //                 "zy/components/contact/contact",
        //                 "zy/components/about/about",
        //                 "zy/components/projects/projects",
        //                 "zy/components/careers/careers",
        //                 "zy/components/scroll-to-hash/scroll-to-hash",
        //                 "config"
        //             ]
        //         }]
        //     }
        // }
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-contrib-requirejs");

    //#endregion
};