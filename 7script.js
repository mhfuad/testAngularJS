

var myApp = angular
				.module("myModule",[])
				.controller("myController",function ($scope) {
					var technologys = [
						{name:"PHP",likes:0,disliks:0},
						{name:"Java",likes:0,disliks:0},
						{name:"Laravel",likes:0,disliks:0},
						{name:"AngularJs",likes:0,disliks:0},
					];

					$scope.technologys = technologys;

					$scope.incrementLiks = function (techno) {
						techno.likes ++;
					}
					$scope.incrementDisLiks = function (techno) {
						techno.disliks ++;
					}
				});