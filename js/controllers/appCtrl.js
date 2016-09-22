angular.module('app').controller('appCtrl', ['$scope','productService', function($scope, productService){
 
    
//$scope.productLists=productService.productLists;
//$scope.productItems=productService.productItems;

    
    $scope.productLists = "";
    alert("appctrl");
    alert(productService.productLists);    
     $scope.$watch(function(){
                                return productService.productLists;
                            },function(newVal,oldVal){
                                                        if(oldVal!=newVal)
                                                                {
                                                                    $scope.productLists=newVal;
                                                                }
        console.log($scope.productLists);
        alert($scope.productLists);
    });
    
    
     }]);
    
    
    
//     $scope.sortedlist = [];
//                    for (var i = 0; i < $scope.productLists.length; i++) {
//                            if ($scope.productLists[i].id == $scope.selectId) {
//                                   // alert($scope.selectId);
//                                    $scope.sortedlist.push($scope.item[i]);
//                            }
//                    }
//    
    
   
   
                                                                  