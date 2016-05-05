import angular from 'angular';

angular
  .module('app')
    .component('app', {
    templateUrl: 'client/app/app.html',
    controllerAs: 'appCtrl',
    controller : function($scope, $reactive) {
      'ngInject';
      $reactive(this).attach($scope);
      this.helpers({
        message() {
          return 'Hello from App Controller!';
        }
      });
    }
  });