// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute', 'ngAnimate']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'vistas/inicio.html',
            controller  : 'mainController'
        })
        .when('/nosotros', {
            templateUrl : 'vistas/nosotros.html',
            controller  : 'aboutController'
        })
        .when('/portafolio', {
            templateUrl : 'vistas/portafolio.html',
            controller  : 'portafolioController'
        })
        .when('/portafolio/comercio', {
            templateUrl : 'vistas/portafolio/comercio.html',
            controller  : 'comercioController'
        })
        .when('/portafolio/hogar', {
            templateUrl : 'vistas/portafolio/hogar.html',
            controller  : 'hogarController'
        })
        .when('/portafolio/produccion', {
            templateUrl : 'vistas/portafolio/produccion.html',
            controller  : 'produccionController'
        })
        .when('/contacto', {
            templateUrl : 'vistas/contacto.html',
            controller  : 'contactoController'
        })



        .otherwise({
            redirectTo: '/'
        });
});

angularRoutingApp.controller('mainController', function($scope) {

});

angularRoutingApp.controller('aboutController', function($scope) {

});

angularRoutingApp.controller('portafolioController', function($scope) {

});

  angularRoutingApp.controller('comercioController', function($scope) {

  });

  angularRoutingApp.controller('hogarController', function($scope) {

  });

  angularRoutingApp.controller('produccionController', function($scope) {

  });

angularRoutingApp.controller('contactoController', function($scope) {

});
