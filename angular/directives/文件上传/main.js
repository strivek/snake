(function(angular) {
	'use strict'
	var app = angular.module('fileApp',[]);
	app.controller('fileController',function($scope){

	})



	app.directive('fileUpload',function(){
		return{
			restrict:"E",
			scope:{
				'imglist':'='
			},
			templateUrl:'fileUpload.html',
			link:function(scope,iElem,iAttrs){
				
			}
		}
	})

})(window.angular)