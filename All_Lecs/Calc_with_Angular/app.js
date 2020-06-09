(function (){
'use strict';
angular.module('calcApp',[])
.controller('cntroller', function ($scope){
$scope.name="";
$scope.val=0;
$scope.fnname= function(){
    var tot= calcfn($scope.name);
    $scope.val=tot;
};

function calcfn(str){
    var sum=0;
    for(var i=0;i<str.length;i++){
        sum+=str.charCodeAt(i);
    }
    return sum;
}

});

})();


// (function () {
//     'use strict'; 
//     angular.module('NameCalculator', [])  
//     .controller('NameCalculatorController', function ($scope) {
//       $scope.name = "";
//       $scope.totalValue = 0;  
//       $scope.displayNumeric = function () {
//         var totalNameValue = calculateNumericForString($scope.name);
//         $scope.totalValue = totalNameValue;
//       };
//       function calculateNumericForString(string) {
//         var totalStringValue = 0;
//         for (var i = 0; i < string.length; i++) {
//           totalStringValue += string.charCodeAt(i);
//         }
    
//         return totalStringValue;
//       }
    
//     });
    
    
//     })();