angular.module('templateStore.templates',['ngRoute'])

.config(['$routeProvider',function($routeProvider,$locationProvider){

	$routeProvider.when('/templates',{
		templateUrl: 'templates/templates.html',
		controller:'TemplatesCtrl'
	})
	.when('/templates/:templateId',{
		templateUrl: 'templates/templates-details.html',
		controller:'TemplatesDetailsCtrl'
	})
}])

.controller('TemplatesCtrl',['$scope', '$http',function($scope,$http){
	 
	 $http.get('json/templates.json').success(function(data){
	 	//console.log(data);

	 	$scope.templates=data;
	 	console.log(data.name);
	 });
}])
.controller('TemplatesDetailsCtrl',['$scope','$routeParams',function($scope ,$routeParams){
  	console.log("Params",$routeParams);
}]);