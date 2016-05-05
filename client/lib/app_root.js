import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

angular
    .module('app', [
        angularMeteor,
        uiRouter
    ]);
    
function onReady() {
    angular
        .bootstrap(document, ['app'], {
            strictDi : true
        });
        
        new WOW().init();
}
angular.element(document).ready(onReady);
    