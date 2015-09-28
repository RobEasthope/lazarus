function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'content': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        }
      }
    })
    .state('project-sandbox', {
      url: '/project-sandbox',
      views: {
        'content': {
          templateUrl: 'app/projects/project-sandbox.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
