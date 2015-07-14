'use strict'

angular.module('myApp',[])
.controller('main1Controller',function($scope,userServer,$log){
	$scope.form = {};
	$scope.form.name = userServer.name;
	$scope.update = function  () {
		userServer.updateName1();
	}
})
.controller('main2Controller',function($scope,userServer,$log,$rootScope){
	$scope.form ={};
	$scope.form.name = userServer.name;
	$scope.update = function(){
		userServer.updateName2();
	}
})
.factory('userServer',function($log,$rootScope){
	var obj  = {};
	obj.name = ['小张'];
	obj.updateName1 = function() {
		var arr = ["小张的儿子"];
		angular.copy(arr,obj.name);
	}	
	obj.updateName2 =function() {
		var arr = ["小张的女儿"];
		angular.copy(arr,obj.name);
	}
	return obj;
})