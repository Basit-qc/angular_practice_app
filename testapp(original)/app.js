/**
 * Created by basit on 7/29/15.
 */

var mainApp = angular.module("mainApp", ['ngRoute', 'ngAnimate']);

mainApp.config(function($routeProvider){
    $routeProvider
        .when('/list', {
        controller: 'myController',
        templateUrl: 'views/myController.html'
        })
        .when('/profile/:doctorId', {
        controller: 'Profile',
        templateUrl: 'views/profile.html'
        })
        .when('/patients', {
        controller: 'Patients',
        templateUrl: 'views/patients.html'
        })
        .when('/home', {
        controller: 'Home',
        templateUrl: 'views/home.html'
        })
        .otherwise({redirectTo: '/'});
});