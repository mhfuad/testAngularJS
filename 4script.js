


var myApp = angular
				.module("myModule",[])
				.controller("myController",function ($scope) {
					var contry = {
						name : "bangladesh",
						capital : "Dhaka",
						flag : "bdFlage.jpg"
					}
					$scope.contry = contry;
				});