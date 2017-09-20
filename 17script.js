

var app = angular
			.module('myModule',[])
			
			/*.controller('myController',['$scope','$http',function($scope,$http){
				$http.get("17db.php")
					.success(function(data){
						$scope.employees = data;
					})
					.error(function(){
						$scope.employees = "No Data Found";
					});
			}]);*/
			.controller("myController",function($scope,$http){
				$http({
				  method: 'GET',
				  url: '17db.php'
				}).then(function successCallback(response) {
				    $scope.employees = response.data;
				  }, function errorCallback(response) {
				    $scope.employees = "no data found";
				  });
			})