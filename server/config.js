'use strict';
global.CONFIG = {
    keys: 'llave del sistema',
    name: "sample_server",
    server: {
        port: 13131,
        host: '127.0.0.1',
        paths: {
            api: './api/',
            router: './'
        }
    },
    client: {
        paths: {
            app:        '../client',
            public:     '../client/_public',
            service:    '../client/service',
            factory:    '../client/factory',
            filter:     '../client/filter',
            directive:  '../client/directive',
            controller: '../client/controller'
        }
    },
    db: {
        pg: {},
        mysql: {},
        mongo: {}
    }
};

// Siempre estar al final
module.exports = {};