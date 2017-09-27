var app = angular
			.module('myModule',[])
			.controller('myController',function($scope,stringService){
				$scope.transformString = function(inputString){
					$scope.outputString = stringService.processString(inputString);
				}
			});