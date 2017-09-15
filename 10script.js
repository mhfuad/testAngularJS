

var myApp = angular
				.module('myModule',[])
				.controller('myController',function ($scope) {
					var employees = [
						{name:"fuad",age:new Date("Feb 10, 1990"),gender:"male",salary:12000},
						{name:"Shohel",age:new Date("Feb 10, 1985"),gender:"male",salary:14000},
						{name:"Laskar",age:new Date("Feb 10, 1970"),gender:"male",salary:40000},
					];
					$scope.employees = employees;
					$scope.sortColumn = "name";
					$scope.reverseSort = false;

					$scope.sortData = function (column) {
						$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
						$scope.sortColumn = column;
					}

					$scope.getSortClass = function (column) {
						if($scope.sortColumn == column){
							return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
						}
						return '';
					}
				});