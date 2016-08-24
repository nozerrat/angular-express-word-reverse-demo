"use strict";

global.ROUTER = { 
    app: null,
    response: function( res, data ) {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( data ) );
    },
    registerRoute: function( app ) {
        this.app = this.app || app;
    
        this.app.get("/word", function( req, res ) {
            WordsCtrl.consultAll( req, res, this.response );
        }.bind( this ));

        this.app.get("/word/:id", function( req, res ) {
            WordsCtrl.consult( req, res, this.response );
        }.bind( this ));

        this.app.post("/word/:text", function (req, res) {
            WordsCtrl.insert( req, res, this.response );
        }.bind( this ));

        this.app.put("/word/:text/:id", function (req, res) {
            WordsCtrl.update( req, res, this.response );
        }.bind( this ));

        this.app.delete("/word/:id", function (req, res) {
            WordsCtrl.delete( req, res, this.response );
        }.bind( this ));

}};

// Siempre estar al final
module.exports = {};