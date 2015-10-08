class PortfolioIndexService {
  constructor () {
    'ngInject';

    this.data = [
      {
        title : 'Sony Wheel',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'sony-wheel'
      },
      {
        title : 'Haygarth digital room',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'haygarth-digital-room'
      },
      {
        title : 'YSL Rock Chick',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'ysl-rock-chick'
      },
      {
        title : 'Layla Moran',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'layla-moran'
      },
      {
        title : 'Lambeth Advice Centre',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'lambeth-advice-centre'
      },
      {
        title : 'The Association of Lancastrians in London',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'lancastrians'
      },
      {
        title : 'EUFN',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'eufn'
      },
      {
        title : 'Haygarth',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'haygarth'
      },
      {
        title : 'Sony Demo Bay',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'sony-demo-bay'
      },
      {
        title : 'Gulp emails',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'gulp-emails'
      },
      {
        title : 'Think Differently',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'think-differently'
      },
      {
        title : 'Waterleaf',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'waterleaf'
      },
      {
        title : 'AMBR Media',
      	image : 'assets/images/saladin-logo-dark-with-diamond.svg',
        state  : 'ambr'
      }
    ];
  }

  getPortfolioIndexContent() {
    return this.data;
  }
}

export default PortfolioIndexService;
