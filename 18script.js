

var app = angular
			.module("myModule",[])
			.controller("myController",function($scope,$http,$log){

				var successCallBack = function (response) {
					$scope.employees = response.data;
				};
				var errorCallBak = function (response) {
					$scope.employees = response.data;
				}
				$http({
					method:'GET',
					url:'17db.php'})
				.then(successCallBack,errorCallBak);
			});