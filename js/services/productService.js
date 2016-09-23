angular.module("app").service("productService", ["$http", function($http){

    var obj=this;
    $http.get("/service/inventory_type").then(function(response){  
                obj.productLists= response.data;
                //alert("Service1");
                console.log(obj.productLists);
                });
    
    
    var objj=this;
    
         $http.get("/service/inventory").then(function(response){
         objj.productItems= response.data;           
          console.log(objj.productItems);
          //alert("Service");
            var see=objj.productItems[i].id;

   
    });
    

    
    
    
    }]);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
        
