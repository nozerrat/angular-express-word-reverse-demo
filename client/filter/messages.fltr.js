"use strict";

angular.module( "messagesApp" )
.filter("messagesFltr", [
    function () {
        return function ( value ) {
            value = value || '';
            return value + ' Hola Filter';
        };
    }
]);
