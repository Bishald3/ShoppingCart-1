angular.module("app").service("productService", ["$http", function($http){

    
    
   
    
         $http.get("/service/inventory").then(function(response){
            Obj.productItems= response.data; 
             console.log("from Service inventory")
             console.log(Obj.productItems);


   
    });
    
    
    
      var Obj=this;
        this.id=null;

    this.getProductItemsIds=function(){
        
        var url ="/service/inventory/"+Obj.id;
        
        
         $http.get(url).then(function(response){
                          

            Obj.productItemsIds= response.data; 
             
             
             console.log("from Service inventory by inventorytype_id");
             console.log(Obj.productItemsIds);


   
    });
    }
    
    
    
    
    
    $http.get("/service/inventory_type").then(function(response){  
                Obj.productLists= response.data;
                console.log("Service1");
                console.log(Obj.productLists);
                });
    
    
    
    this.currentId = null;
   
    
    this.getProductListsIds=function(){
         $http.get("/service/inventory_type/"+Obj.currentId).then(function(response){
            Obj.productListsIds= response.data;  
             
             console.log("from Service inventory_type by id")
             console.log(Obj.productListsIds);


   
    });
    }
    
    
    
    
    
    }]);




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
        
