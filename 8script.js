

var myApp = angular 
				.module("myModule",[])
				.controller("myController",function ($scope) {
					var employees = [
						{name:"faud",DateOfBirth: new Date("February 10, 1990"), gender:"Male",salary:8000},
						{name:"Jesmin",DateOfBirth: new Date("February 10, 1993"), gender:"Female",salary:9000},
						{name:"Mahadi",DateOfBirth: new Date("July 25, 1988"), gender:"Male",salary:90000},
						{name:"Zakir",DateOfBirth: new Date("July 25, 1986"), gender:"Male",salary:90000},
					];

					$scope.employees = employees;
					$scope.rowLimit = 3;
				});
