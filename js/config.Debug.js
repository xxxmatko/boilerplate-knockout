require({
    urlArgs: "v={cacheBust}",
    packages: [{
        name: "my",
        location: "/js"
    }, {
        name: "resources",
        location: "/js/resources"
    }],
    paths: {
        "i18next": "/js/libs/i18next",
        "jquery": "/js/libs/jquery",
        "knockout": "/js/libs/knockout",
        "knockout.validation": "/js/libs/knockout.validation",
        "materialize": "/js/libs/materialize",
        "text": "/js/libs/text",
        "leaflet": "/js/libs/leaflet",
        "waypoints": "/js/libs/waypoints"
    },
    shim: {
        "waypoints": {
            exports: "Waypoint"
        }
    },
    config: {
        "my/i18n": {
            language: (window.location.href.indexOf("lang=") !== -1) ? window.location.href.split("lang=")[1].substr(0, 2) : document.documentElement.lang || "sk"
        },
        "my/components/app/app": {
        }
    }
}, ["my/main"]);