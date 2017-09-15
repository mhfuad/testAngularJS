var myApp = angular
				.module("myModule",[])
				.controller("myController",function ($scope) {
					/*var employees = [
						{firstName:"fuad",lastName:"hasan",age:29,gender:"male"},
						{firstName:"Mahadi",lastName:"hasan",age:32,gender:"male"},
						{firstName:"Abdullah",lastName:"hasan",age:10,gender:"male"},
						{firstName:"Abdur Rahman",lastName:"hasan",age:8,gender:"male"}
					];
					$scope.employees = employees;*/

					var countries = [
						{
							name:"Bangladesh",
							cities:[
								{name:"Dhaka"},
								{name:"Chittogong"},
								{name:"Borishal"},
								{name:"gopalgonge"}
							]
						},
						{
							name:"Pakistan",
							cities:[
								{name:"Korachi"},
								{name:"Lahor"},
								{name:"Islamabad"}
							]
						},
						{
							name:"India",
							cities:[
								{name:"Kolkata"},
								{name:"Bangalor"},
								{name:"Channai"},
								{name:"Nijamuddin"}
							]
						},
					];
					$scope.countries = countries;
				});