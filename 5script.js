

var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					$scope.message = "Hello Angular Js";
					var employee = {
						name : "fuad",
						age : 32,
						gender : "male"
					};
					$scope.employee = employee;
				});