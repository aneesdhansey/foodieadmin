import angular from 'angular';

angular
  .module('app')
    .component('sales', {
    templateUrl: 'client/sales/sales.html',
    controllerAs: 'salesCtrl',
    controller : function($scope, $reactive,$state) {
      'ngInject';
      
      $reactive(this).attach($scope);
      
      this.$onInit = () => {
        document.title = 'MeteorDemoApp - Sales';
      }
      
      this.helpers({
        message() {
          return 'This is Sales.html!';
        }
      });
    }
  });