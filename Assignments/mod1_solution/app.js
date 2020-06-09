(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.string = "";
      $scope.myAns = "";
      $scope.col="";
      $scope.checking = function () {
        var s=$scope.string.split(',').length;
        var arr=$scope.string.split(',')
        var b=s;
        for(var i=0;i<b;i++){
            if(arr[i]===""){
                s--;
            }
        }
        if($scope.string===""){
            $scope.myAns ="Empty";
            $scope.col="red";
        }

        else if(s>=1 && s<=3){
            $scope.myAns ="Enjoy!";
            $scope.col="green";
        }
        else{
            $scope.myAns ="Too much!";
            $scope.col="green";
        }
        
      };
    
      
    }
    
    })();
    