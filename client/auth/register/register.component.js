import angular from 'angular';
import { Accounts } from 'meteor/accounts-base';


angular
  .module('app')
    .component('register', {
    templateUrl: 'client/auth/register/register.html',
    controllerAs: 'regCtrl',
    controller : function($scope, $reactive, $state) {
      'ngInject';
      $reactive(this).attach($scope);
      this.helpers({
        message() {
          return 'Hello from App Controller!';
        }
      });
      
      this.$onInit = () => {
        document.title = 'MeteorDemoApp - Register';
      }
      
      this.register = () => {
        
        if(this.email == null || this.email == '')
        {
            toastr.error("Email is required")
            return;
        }
        if(this.password == null || this.password == '')
        {
            toastr.error("Password is required")
            return;
        }
        
        Accounts.createUser({email : this.email, password : this.password}, function(error){
            if(error)
                toastr.error(error.reason)
            else
            {
                $state.go('home');
            }
        })
        
      };
    }
  });