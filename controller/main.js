'use strict';
var crud = angular.module('crud',['ngRoute'] )

.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl:'./view/home.html',
        controller:'homeController'
	})
});

