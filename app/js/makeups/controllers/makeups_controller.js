'use strict';

module.exports = function(app) {
	app.controller('makeupsController', ['$scope', '$http', function($scope, $http) {
		$scope.makeups = [];
		$scope.getAll = function() {
			$http({
				method: 'GET',
				url: '/api/v1/makeups'
			})
			.success(function(data) {
				$scope.makeups = data;
			})
			.error(function(data) {
				console.log(data);
			});
		};
		$scope.create = function(makeup) {
			$http({
				method: 'POST',
				url: '/api/v1/makeups',
				data: makeup
			})
			.success(function(data) {
				$scope.makeups.push(data);
			})
			.error(function(data) {
				console.log(data);
			});
		};
		$scope.save = function(makeup) {
			$http({
				method: 'PUT',
				url: '/api/v1/makeups/' + makeup._id,
				data: makeup
			})
			.success(function(data) {
				makeup.editing = false;
			})
			.error(function(data) {
				console.log(data);
			});
		};
		$scope.remove = function(makeup) {
			$http({
				method: 'DELETE',
				url: '/api/v1/makeups/' + makeup._id
			})
			.success(function() {
				$scope.makeups.splice($scope.makeups.indexOf(makeup), 1);
			})
			.error(function(data) {
				console.log(data);
			});
		};
		$scope.editToggle = function(makeup) {
			if(makeup.editing) {
				makeup.brand = makeup.oldBrand;
				makeup.editing = false;
			} else {
				makeup.oldBrand = makeup.brand;
				makeup.editing = true;
			}
		};
	}]);
};


