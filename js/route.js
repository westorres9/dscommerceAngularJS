DSCommerce.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/catalogo.html',
        controller:'catalogController',
        controllerAs: 'vm'
    })
    .when('/products', {
        templateUrl: 'pages/catalogo.html',
        controller:'catalogController',
        controllerAs: 'vm'
    })
    .when('/login', {
        templateUrl: 'pages/login.html',
        controller:'loginController',
        controllerAs: 'vm'
    })
    .when('/cart', {
        templateUrl: 'pages/carrinho.html',
        controller:'cartController',
        controllerAs: 'vm'
    })
    .when('/details', {
        templateUrl: 'pages/detalhes.html',
        controller:'detailsController',
        controllerAs: 'vm'
    })
    .when('/admin', {
        templateUrl: 'pages/admin-home.html',
        controller:'adminController',
        controllerAs: 'vm'
    })
})