(function(angular) {
	'use strict'
	var app = angular.module('optionsApp', []);

	app.controller('optionController', function($scope) {
		$scope.man = [{
			name: "张三"
		}, {
			name: "李四"
		}, {
			name: "李五"
		}]
		$scope.women = [{
			name: "韩尚"
		}, {
			name: "韩中"
		}, {
			name: "韩下"
		}]
		$scope.name = "fuck";
	})


	app.directive('translate', function() {
		return {
			restrict: "E",
			scope: {
				'left': "=",
				'right': "="
			},
			templateUrl: "directive/option.html",
			link: function(scope, iElm, iAttrs) {
				// console.log(scope.left.pop(),scope.left.pop());
				scope.list1 = [];
				scope.list2 = [];
				var index;
				//向右移动数据
				scope.pullRight = function() {
						while (index = scope.list1.pop()) {
							scope.right.push(scope.left[index]);
							scope.left.splice(index, 1);
						}

					}
					//向左移动数据
				scope.pullLeft = function() {
						while (index = scope.list2.pop()) {
							scope.left.push(scope.right[index]);
							scope.right.splice(index, 1);
						}
				}

			}
		}
	})


})(window.angular)