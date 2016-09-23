angular.module('app').controller('appCtrl', ['$scope','productService', function($scope, productService){
 
    
//$scope.productLists=productService.productLists;
//$scope.productItems=productService.productItems;

    
    $scope.productLists = "";
    //alert("appctrl");
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
    
    
    $scope.productItems = "";
    alert("appctrl");
    alert(productService.productItems);    
     $scope.$watch(function(){
                                return productService.productItems;
                            },function(newVal,oldVal){
                                                        if(oldVal!=newVal)
                                                                {
                                                                    $scope.productItems=newVal;
                                                                }
        console.log($scope.productItems);
        alert($scope.productItems);
    });
    
    
     $scope.chooseSelectedItem=function(itemID, itemDes) {


                    $scope.selectId = itemID;
                    $scope.itemDescription = itemDes;

                    $scope.sortedlist = [];
                    for (var i = 0; i < $scope.productItems.length; i++) {
                            if ($scope.productItems[i].see == $scope.selectId) {
                                    $scope.sortedlist.push($scope.productItems[i]);
                            }
                    }

            };

    
    
     }]);
    
    
    
    
   
    
   
   
                                                                  