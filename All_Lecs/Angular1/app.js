
// (function () {
//     'use strict';
    
//     angular.module('myFirstApp', [])
    
//     .controller('MyFirstController', function ($scope) {
//     $scope.nm = "yash";
//     });
    
//     })();
(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
      $scope.name = "Yaakov";
      $scope.sayHello = function () {
        return "Hello Coursera!";
      };
    });
    
    })();