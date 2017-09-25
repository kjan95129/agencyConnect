'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/login');

        // Application routes
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html',
                css: 'C:\Users\kjan\Documents\agencyConnect\src\css\style.css'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html',
                css: 'C:\Users\kjan\Documents\agencyConnect\src\css\style.css'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'templates/search.html',
                css: 'C:\Users\kjan\Documents\agencyConnect\src\css\style.css'
            })
            .state('billingInquiries', {
                url: '/billingInquiries',
                templateUrl: 'templates/billingInquiries.html',
                css: 'C:\Users\kjan\Documents\agencyConnect\src\css\style.css'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                css: 'C:\Users\kjan\Documents\agencyConnect\src\css\style.css'
            });
    }
]);