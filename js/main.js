define([
    "jquery",
    "knockout",
    "knockout.validation",
    "materialize",
    "leaflet",
    "waypoints",
    "my/i18n",
    "my/bindings/i18n"
], function ($, ko, koValidation, M, L, Waypoint, i18n) {
    // Component registration
    ko.components.register("my-app", { require: "my/components/app/app" });
    
    // Start the application
    $(function () {
        ko.applyBindings({
            lang: i18n.language
        });
    });
});