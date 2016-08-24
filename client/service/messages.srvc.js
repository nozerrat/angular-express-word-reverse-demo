"use strict";

angular.module( "messagesApp" )
.service("messagesSrvc", [
    function () {
        this.message = 'Hola Service';
    }
]);