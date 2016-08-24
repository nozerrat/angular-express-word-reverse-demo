"use strict";

angular.module( "messagesApp" )
.directive("mytitle", [
    function () {
        return {
            restrict: "E",
            scope: {
                msgs: "="
            },
            template: "<h2>{{msgs}}</h2>"
        };
    }
]);