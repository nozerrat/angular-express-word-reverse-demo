"use strict";

var fs = require("fs");

global.UTILS = {
    endsWith: function (pattern, suffix) {
        return pattern.indexOf(suffix, pattern.length - suffix.length) !== -1;
    },

    /**
     * Returns all files in given directory
     * @param {type} path
     * @returns {Array} array of file names in given path
     * example:
        console.log("loading routing handlers...");
        var routes = utils.listFiles((path.join(path.dirname(__filename), config.server.paths.api)).toString());
        // load all routers
        routes.forEach(function (route) {
            require(route).registerRoute(app);
        });
     */
    listFiles: function (path) {
        console.log( path );
        var arr = [];
        var files = fs.readdirSync(path);
        files.forEach(function (file) {
            if (exports.endsWith(file, "js")) {
                arr.push(path + file);
            }
        });
        return arr;
    },
    listFoldersAndNames: function (path) {
        var arr = {};
        var files = fs.readdirSync(path);
        files.forEach(function (file) {
            arr[file] = path + file; // TODO problem with same filename in different folder
        });
        return arr;
    },
    listFilesAndNames: function (path) {

        var arr = {};
        var files = fs.readdirSync(path);
        var _s;
        files.forEach(function (file) {
            if (exports.endsWith(file, "js")) {
                _s = file.substring(0, file.indexOf(".js"));
                arr[_s] = path + file; // TODO problem with same filename in different folder
            }
        });
        return arr;
    },
    errorRespond: function (response, errCode, errMsg) {
        response.writeHead(errCode, {
            "Content-Type": "text/plain"
        });
        response.write(errMsg);
        response.end();
    },
    definedNotNull: function(obj) {
        return (typeof obj !== "undefined" && obj !== null);
    }
}
// Siempre estar al final
module.exports = {};