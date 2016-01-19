'use strict';

/**
 * @ngdoc function
 * @name camperNewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the camperNewsApp
 */
var app = angular.module('camperNewsApp');

app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.allNews = [];

    $http.get('https://api-https.herokuapp.com/freecodecamp/news/hot')
        .then(function(res) {
            $scope.allNews = res.data;
        });
}]);

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
