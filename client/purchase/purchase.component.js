import angular from 'angular';

angular
  .module('app')
    .component('purchase', {
    templateUrl: 'client/purchase/purchase.html',
    controllerAs: 'pchCtrl',
    controller : function($scope, $reactive,$state) {
      'ngInject';
      
      $reactive(this).attach($scope);
      
      this.$onInit = () => {
        document.title = 'MeteorDemoApp - Purchase';
      }
      
      this.helpers({
        message() {
          return 'This is Purchase.html!';
        }
      });
    }
  });