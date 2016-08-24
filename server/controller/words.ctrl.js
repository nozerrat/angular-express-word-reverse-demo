"use strict";
// var wordsModel = require( '../model/words.model' );

/**
 * @type Controller
 * @name Words
 **/
global.WordsCtrl = {
    reverse: function( data ) {
        var resp = [];
        data = data || [];
        data.forEach(function( value, index, array ) {
            resp.push({
                original: ''+value, 
                reverted: ''+value.reverse()
            });
        });
        return resp;
    },
    
    /**
     * @name insert
     * @type Function
     * @param {Object} req Solicitud del cliente
     * @param {Object} res Respuesta al cliente
     * @param {Function} cb Funcion que responde a la solicitud del cliente
     **/
    insert: function( req, res, cb ) {
        // req.session.data
        var data = WordsModel.insert( req.params ) || [];
                
        // Responder a la solicitud
        cb( res, this.reverse( data ) );
    },
    
    /**
     * @name update
     * @type Function
     * @param {Object} req Solicitud del cliente
     * @param {Object} res Respuesta al cliente
     * @param {Function} cb Funcion que responde a la solicitud del cliente
     **/
    update: function( req, res, cb ) {
        var data = WordsModel.update( req.params );
        
        // Responder a la solicitud
        cb( res, this.reverse( data ) );
    },
    
    /**
     * @name delete
     * @type Function
     * @param {Object} req Solicitud del cliente
     * @param {Object} res Respuesta al cliente
     * @param {Function} cb Funcion que responde a la solicitud del cliente
     **/
    delete: function( req, res, cb ) {
        var data = WordsModel.delete( req.params );
        
        // Responder a la solicitud
        cb( res, this.reverse( data ) );
    },
    
    /**
     * @name consult
     * @type Function
     * @param {Object} req Solicitud del cliente
     * @param {Object} res Respuesta al cliente
     * @param {Function} cb Funcion que responde a la solicitud del cliente
     **/
    consult: function( req, res, cb ) {
        var data = WordsModel.consult( req.params );
        cb( res, data );
    },
    
    /**
     * @name consultAll
     * @type Function
     * @param {Object} req Solicitud del cliente
     * @param {Object} res Respuesta al cliente
     * @param {Function} cb Funcion que responde a la solicitud del cliente
     **/
    consultAll: function( req, res, cb ) {
        // req.session.data =
        var data = WordsModel.consult( /* All */ ) || [];
       
        // Responder a la solicitud
        cb( res, this.reverse( data ) );
    }
};

// Siempre estar al final
module.exports = {};
