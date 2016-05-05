angular
  .module('app')
  .config(function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('app',{
        url : '/app',
        template : '<app></app>'
      })
      .state('login',{
        url : '/login',
        template : '<login></login>'
      })
      .state('register',{
        url : '/register',
        template : '<register></register>'
      })
      .state('home',{
        url : '/home',
        template : '<home></home>',
        resolve : {
          currentUser : ($q) => {
            if (Meteor.userId() == null) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        }
      })
      .state('home.dashboard',{
        url : '/dashboard',
        views : {
          "modules" : {
            template : '<dashboard></dashboard>'
          }
        }
      })
      .state('home.inventory',{
        url : '/inventory',
        views : {
          "modules" : {
            template : '<inventory></inventory>'
          }
        }
      })
      .state('home.purchase',{
        url : '/purchase',
        views : {
          "modules" : {
            template : '<purchase></purchase>'
          }
        }
      })
      .state('home.sales',{
        url : '/sales',
        views : {
          "modules" : {
            template : '<sales></sales>'
          }
        }
      });
      

      $urlRouterProvider.otherwise('/login');
  })
  .run(($rootScope, $state) => {
    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('login');
      }
    });
  });
