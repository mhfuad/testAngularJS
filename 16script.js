

var app = angular
			.module('myModule',[])
			.controller('myController',function ($scope) {
				var employees = [
						{name:"fuad",gender:"male",salary:12000},
						{name:"Shohel",gender:"male",salary:14000},
						{name:"Laskar",gender:"male",salary:40000},
					];
					$scope.employees = employees;
					$scope.divView = "16table.html";
			});