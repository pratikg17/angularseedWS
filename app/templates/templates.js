angular.module('templateStore.templates',['ngRoute'])

.config(['$routeProvider',function($routeProvider){

	$routeProvider.when('/templates',{
		templateUrl: 'templates/templates.html',
		controller:'TemplatesCtrl'
	})
	.when('/templates/:templateId',{
		templateUrl: 'templates/templates-details.html',
		controller:'TemplatesDetailsCtrl'
	})
}])

.controller('TemplatesCtrl',['$scope',function($scope){
	 
}])
.controller('TemplatesDetailsCtrl',['$scope',function($scope){

}]);