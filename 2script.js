/*//Module
var myApp = angular.module("myModule",[]);

//controller 
var myController = function($scop){
	$scop.massage = "Angular Js tutorial";
};

//register controller into module
myApp.controller("myController",myController);*/








//Module
var myApp = angular.module("myModule",[]);

//make controller and register controller in one line
myApp.controller("myController",function($scope){
	$scope.massage = "Angular Js tutorial";
});

