(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
    var itembuy = this;
    itembuy.size1=0;
        itembuy.listtb = ShoppingListCheckOffService.gettobuy();
        itembuy.size1=ShoppingListCheckOffService.gettobuylen();
        
        // itembuy.remove = function (itemIndex) {
        //     ShoppingListCheckOffService.remove(itemIndex);
        // }
        
            itembuy.remove = function (itemIndex) {
                ShoppingListCheckOffService.remove(itemIndex);
                itembuy.size1=ShoppingListCheckOffService.gettobuylen();
                //itembuy.size2=ShoppingListCheckOffService.getbotlen();
                console.log(itembuy.size1);
                //console.log(itembuy.size2);
            }
        
        
    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
    var itembought = this;
    
    
    itembought.listtbo = ShoppingListCheckOffService.getbot();
    itembought.size2=ShoppingListCheckOffService.getbotlen();
    console.log(itembought.size2," this is size 2");
    itembought.view = function () {
        itembought.size2=ShoppingListCheckOffService.getbotlen();
  }
    }

function ShoppingListCheckOffService() {
    var service = this;
    var listtb=[{name:'Biscuits', qty: '4'},{name:'Cakes', qty: '5'},{name:'Chips', qty: '8'} ,{name:'Coke', qty:'8'},
    {name:'Waffles', qty: '5'}];
    var listtbo=[];
    var size1=listtb.length;
    var size2 =listtbo.length;
    service.remove = function (itemIndex) {
        var item = {
            name: listtb[itemIndex].name,
            qty: listtb[itemIndex].qty
          };
      listtbo.push(item);
      listtb.splice(itemIndex, 1);
    //   size1--;
    //   size2++;
      
    };
  
    service.gettobuy = function () {
      return listtb;
    };
    service.getbot = function () {
        return listtbo;
      };
      service.gettobuylen = function () {
          
        return listtb.length;
      };
      service.getbotlen = function () {
         
        return listtbo.length;
      };
  }
    
    })();
    