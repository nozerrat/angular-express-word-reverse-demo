"use strict";

angular.module( "messagesApp" )
.directive("messages", [
    function () {
        return {
            restrict: "E",
            template: "\
                <table>\n\
                    <thead>\n\
                        <tr>\n\
                            <th>Original message</th>\n\
                            <th>Response</th>\n\
                        </tr>\n\
                    </thead>\n\
                    <tbody>\n\
                        <tr data-ng-repeat='m in messages'>\n\
                            <td>{{m.original}}</td>\n\
                            <td>{{m.reverted}}</td>\n\
                            <td><button type='button' ng-click='msgCtrl.consult( $index );'>Edit</button></td>\n\
                            <td><button type='button' ng-click='msgCtrl.delete( $index );'>Del</button></td>\n\
                        </tr>\n\
                    </tbody>\n\
                </table>\n\
            "
        };
    }
]);