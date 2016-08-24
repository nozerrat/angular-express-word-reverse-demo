"use strict";

angular.module( "messagesApp" )
.service("messagesFctr", [
    function () {
        return {message: 'Hola Service'};
    }
]);
