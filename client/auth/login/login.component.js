import angular from 'angular';

angular
  .module('app')
    .component('login', {
    templateUrl: 'client/auth/login/login.html',
    controllerAs: 'loginCtrl',
    controller : function($scope, $reactive, $state) {
      'ngInject';
      $reactive(this).attach($scope);
      this.helpers({
        message() {
          return 'Hello from App Controller!';
        }
      });
      
      this.$onInit = () => {
        document.title = 'MeteorDemoApp - Login';
         
      }
      
      this.signIn = () => {
        
        if(this.email == null || this.email == '')
        {
            toastr.error("Email is required");
            return;
        }
        
        if (this.password == null || this.password == '') {
            toastr.error("Password is required");
            return;
        }
        
        Meteor.loginWithPassword(this.email, this.password, function(error){
            if(error)
                toastr.error(error.reason);
                else
                    $state.go('home.dashboard');
        });  
      };
    }
  });