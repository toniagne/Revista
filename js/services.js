angular.module('starter.services', [])
 
.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data

 var chats = [{}];

   

   
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
   mostraconteudos: function (employee) {  
              var itens = employee.split("*");
              var detalheContato = [
                                {
                                    "id": itens[0], 
                                    "strNome": itens[1], 
                                    "chamada": itens[2], 
                                    "pic": itens[3], 
                                    "texto": itens[4]
                                  }
                             ];                           

                        return detalheContato[0];       
     },
    get: function(chatId) {
      console.log(chats);
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
