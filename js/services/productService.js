angular.module("app").service("productService", ["$http", function($http){

    var obj=this;
    $http.get("/service/inventory_type").then(function(response){  
                obj.productLists= response.data;
                alert("Service1");
                console.log(obj.productLists);
                });
    }]);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
        
//     $http.get("/service/inventory").then(function(response){
//         var productItems= response.data;
//           
//        console.log(productItems);
//          alert("Service");
//
//   
//    });
//    
