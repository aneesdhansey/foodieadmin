import angular from 'angular';

angular
  .module('app')
    .component('dashboard', {
    templateUrl: 'client/dashboard/dashboard.html',
    controllerAs: 'dashCtrl',
    controller : function($scope, $reactive,$state) {
      'ngInject';
      
      $reactive(this).attach($scope);
      
      this.$onInit = () => {
        document.title = 'MeteorDemoApp - Dashboard';
      }
      
      this.helpers({
        message() {
          return 'This is Dashboard.html!';
        }
      });
    }
  });