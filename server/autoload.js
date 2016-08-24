'use strict';

/**
 * Realizamos las configuraciones del sistema
 **/
require("./config");


/**
 * miscellaneous
 **/
require("./misc/shims");
require("./misc/utils");

/**
 * Registramos tantos Controlladores y Modelos 
 * que estamos desarrollando
 **/
require('./model/words.model');
require('./controller/words.ctrl');


/**
 * Registramos las rutas necesarias
 **/
require("./routers");

// Siempre estar al final
module.exports = {};