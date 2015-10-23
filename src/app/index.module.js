/* global*/
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import HomeController from './home/home.controller';
import PortfolioIndexService from './home/portfolio-index.service';

angular.module('lazarus', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
  // .run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
  //   $rootScope
  //     .$on('$stateChangeSuccess',
  //       function(event){
  //         if (!$window.ga)
  //             return;
  //
  //         $window.ga('send', 'pageview', { page: $location.path() });
  //     });
  // }])

  .run(function ($rootScope) {
    $rootScope.$on('$viewContentLoaded',function(){
      jQuery('html, body').animate({ scrollTop: 0 }, 0);
    });
  })
  // General config
  .config(config)

  // Routing
  .config(routerConfig)

  .service('PortfolioIndex', PortfolioIndexService)
  .run(runBlock)
  .controller('HomeController', HomeController);
