'use strict';

/**
 * @ngdoc function
 * @name camperNewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the camperNewsApp
 */
var app = angular.module('camperNewsApp');


app.filter('upVotesLength', function(){
    return function (argument) {
        return argument.length;
    }
});

app.filter('formattedTime', function(){
    return function (argument) {
        var correctTime = parseInt(argument/1000);
        return moment.unix(correctTime).format('LLL');
    }
});

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.allNews = [];
    $scope.image = "../images/loading.gif";

    $http.get('http://www.freecodecamp.com/news/hot')
        .then(function(res) {
            $scope.allNews = res.data;
        });
}]);
