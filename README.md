
# Angular Express Word Reverse Demo


Iniciar una aplicación impresionante con [AngularJS](http://angularjs.org/) en la parte front-end, 
[Express](http://expressjs.com/es/) + [nodeJS](https://nodejs.org/es/) en la parte 
back-end. Este proyecto es un demo que muestra el trebajo entre estos componentes.


La aplicación también ofrece un skeleton que proporciona todo lo necesarios, bibliotecas 
para desarrollar un proyecto web. Sólo deberá clonar el repositorio (o descargar el zip / tar) 
y ya está listo para ver el demo en acción.


## Cómo usar angular-express-word-reverse-demo

Clone el repositorio angular-express-word-reverse-demo, en la consola escriba `npm install` y
se instalará los paguetes necesarios para levantar el sistema.


### Levantar la app

    node server/server.js


### Anatomía de la aplicación

## root
    package.json        --> manejador de dependencia para NodeJS (backend).
    bower.json          --> manejador de dependencia del cliente (forntend).
    gulpfile.js         --> manejador de tareas.
    .bowerrc            --> configuración para bower.
    client/             --> contiene todas las vistas y archivos estaticos para sitio del cliente.
        _public/        --> contiene los archivos estaticos para sitio del cliente.
            css/        --> hojas de estilos del sistema.
            img/        --> imagenes del sistema.
            js/         --> contiene los javascript del sistema, aquí bower guarda las dependencias.
        controller/     --> controladores de angular.
        directive/      --> directivas de angular.
        factory/        --> fabricas de anguar.
        filter/         --> filtros de angular.
        service/        --> servicios de angular.
        app.js          --> archivo principal de angular.
        index.html      --> index de arranque del sistema.
    server/             --> archivo donde se guardan las configuraciones del sistema Node.
        controller/     --> controladores donde se aplican las logina del negocio.
        model/          --> el modelo donde se aplica la capa de datos.
        autoload.js     --> aquí se realiza los registros de los modelos, controladores, config del sistema.
        config.js       --> contiene la configuración del sistema y base de datos.
        routers.js      --> se registrarán aquí las rutas permitida por el sistema.
        server.js       --> archivo principal del servidor.


## Contacto

Para más información sober AngularJS chequee http://angularjs.org/
Sobre Express, http://expressjs.com/es/ .

## License
MIT