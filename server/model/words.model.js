"use strict";

var data = [
    'negocios',
    'socios',
    'programas',
    'frameworks',
    'javascript',
    'database',
    'postgres'
];


/**
 * @type Model
 * @name Words
 **/
global.WordsModel = {
    /**
     * @name data
     * @type Array
     * @param Object req Solicitud del cliente
     **/
    data: data,
    
    /**
     * @name insert
     * @type Function
     * @param {Object} params Solicitud del cliente
     * @return Array
     **/
    insert: function( params ) {
        if ( params.text )
            this.data.push( params.text );
        return this.data;
    },
    
    /**
     * @name update
     * @type Function
     * @param {Object} params Solicitud del cliente
     * @return Array
     **/
    update: function( params ) {
        this.data[ params.id ] =  params.text;
        return this.data;
    },

    /**
     * @name delete
     * @type Function
     * @param {Object} params Solicitud del cliente
     * @return Array
     **/
    delete: function( params ) {
        var newData = [];
        this.data.forEach( function( value, index ) {
            if ( ''+params.id!==''+index ) //<- Convertimos cualquier valor en String
                newData.push( value );
        });
        
        return this.data = newData;
    },

    /**
     * @name consult
     * @type Function
     * @param {Object} params Solicitud del cliente
     * @return Array
     **/
    consult: function( params ) {
        params = params || {};
        if ( params.id === undefined )
            return this.data;
        else
            return { id: params.id, value: this.data[ params.id ] };
    }
};

// Siempre estar al final
module.exports = {};

