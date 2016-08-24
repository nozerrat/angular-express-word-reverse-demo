"use strict";

angular.module( "messagesApp" )
.controller( "MessagesCtrl", [
             "$scope","$http", 
    function( $scope,  $http ) {
        $scope.messages = [];
        $scope.idMessage = "";
        $scope.currentMessage = "";
        
        this.consultAll = function() {
            $http
                .get( "/word" )
                .then( function( result ) {
                    $scope.messages = result.data;
                }, function( e ) {
                    window.console.error( e );
                });
        };
        this.consultAll();

        this.insert = function() {
            $http
            .post( "/word/" + encodeURIComponent( $scope.currentMessage ), { data:'otra cosa' } )
            .then( function( result ) {
                $scope.messages = result.data;
            }, function( e ) {
                window.console.error( e );
            });
            
            $scope.idMessage = '';
            $scope.currentMessage = '';
        };
        
        this.update = function( id, text ) {
            $http
            .put( "/word/" + encodeURIComponent( text ) + '/' + id, { data:'otra cosa' } )
            .then( function( result ) {
                $scope.messages = result.data;
            }, function( e ) {
                window.console.error( e );
            });
        };
        
        this.consult = function( id  ) {
            $http
            .get( "/word/" + encodeURIComponent( id ), { data:'otra cosa' } )
            .then( function( result ) {
                $scope.idMessage = result.data.id;
                $scope.currentMessage = result.data.value;
            }, function( e ) {
                window.console.error( e );
            });
        };
        
        this.delete = function( id  ) {
            $http
            .delete( "/word/" + encodeURIComponent( id ), { data:'otra cosa' } )
            .then( function( result ) {
                $scope.idMessage = '';
                $scope.currentMessage = '';
                $scope.messages = result.data;
            }, function( e ) {
                window.console.error( e );
            });
        };
        
        this.clean = function( id, text  ) {
            $scope.idMessage = '';
            $scope.currentMessage = '';
        };
        
        this.sendText = function() {
            $http
            .get( "/word/" + encodeURIComponent( $scope.currentMessage ), { data:'otra cosa' } )
            .then( function( result ) {
                $scope.messages.push( result.data );
            }, function( e ) {
                window.console.error( e );
            });
        };
    }
]);