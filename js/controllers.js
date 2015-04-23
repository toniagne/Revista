angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', ['$http', '$scope', function($http, $scope) { 
	     
        $http.get('http://www.ddd37.com.br/app/revista/edicoes/')
               .success(function(data) {
                    $scope.loading = false;
                })
               .then(        
                function(res){ 
                  $scope.edicoes  = res.data;             
                });   
}])

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $ionicModal) {
   
   $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft(); 
  };
              
  $ionicModal.fromTemplateUrl('templates/modal.html', function (modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up'
  });
 })

.controller('ChatsCtrl', function($scope, $http) {

   $http.get('http://www.ddd37.com.br/app/revista/conteudos/')
               .success(function(data) {
                    $scope.loading = false;
                })
               .then(        
                function(res){ 
                  $scope.conteudos  = res.data;             
                });    
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.mostraconteudos($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $http) {
  $http.get('http://www.ddd37.com.br/app/revista/categorias/')
               .success(function(data) {
                    $scope.loading = false;
                })
               .then(        
                function(res){ 
                  $scope.categorias  = res.data;             
                });   
});
