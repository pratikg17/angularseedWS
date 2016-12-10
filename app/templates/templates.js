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
	 	$scope.templates=data;
	 	console.log(data.name);
	 });
}])
.controller('TemplatesDetailsCtrl',['$scope','$routeParams','$http','$filter',function($scope ,$routeParams,$http,$filter){
	 var templateId =$routeParams.templateId;

	 $http.get('json/templates.json').success(function(data){
	 	$scope.template=$filter('filter')(data,function(d){
	 		return d.id=templateId;
	 	})[0];
	 	$scope.mainImage =$scope.template.images[4].name;
	 	 console.log("IMAGE",$scope.mainImage);

	 });

	 $scope.setImage =function(image){
	 	$scope.mainImage=image.name;
	 }


}]);