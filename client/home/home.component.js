import angular from 'angular';

angular
  .module('app')
    .component('home', {
    templateUrl: 'client/home/home.html',
    controllerAs: 'homeCtrl',
    controller : function($scope, $reactive,$state) {
      'ngInject';
      
      $reactive(this).attach($scope);
      
      this.helpers({
        message() {
          return 'Home Controller!';
        },
        
        isHome() {
          return $state.current;
        },
        
        userName() {
            return Meteor.user().emails[0].address;
        }
      });
      
      this.$onInit = () => {
        document.title = 'MeteorDemoApp - Home';
      }
      
      this.toggleSideBar = () => {
            $("#wrapper").toggleClass("toggled");
      }
      
      this.logout = () => {
          Meteor.logout();
          $state.go('login');
          
      }
    }
  });