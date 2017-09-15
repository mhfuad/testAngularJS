/*var myApp = angular.module("myModule",[]);
myApp.controller("myController",function($scope){

	var Employee = {
		firstName : "fuad",
		lastName : "Hasan",
		gender : "male"
	}
	$scope.employee = Employee;
});*/

var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var Employee = {
						firstName : "fuad",
						lastName : "Hasan",
						gender : "male"
					}
					$scope.employee = Employee;
				});