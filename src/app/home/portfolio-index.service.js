class PortfolioIndexService {
  constructor () {
    'ngInject';

    this.data = [
      {
        title : 'Sony Wheel',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'Haygarth digital room',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'YSL Rock Chick',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'Layla Moran',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'Lambeth Advice Centre',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'The Association of Lancastrians in London',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'EUFN',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'Haygarth',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'Sony Demo Bay',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'Gulp emails',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'Think Differently',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'Waterleaf',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      },
      {
        title : 'AMBR Media',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg'
      }
    ];
  }

  getPortfolioIndexContent() {
    return this.data;
  }
}

export default PortfolioIndexService;
