import angular from 'angular';

angular
  .module('app')
    .component('inventory', {
    templateUrl: 'client/inventory/inventory.html',
    controllerAs: 'invCtrl',
    controller : function($scope, $reactive,$state) {
      'ngInject';
      
      $reactive(this).attach($scope);
      
      this.$onInit = () => {
        document.title = 'MeteorDemoApp - Inventory';
      }
      
      this.helpers({
        message() {
          return 'This is Inventory.html!';
        }
      });
    }
  });