class PortfolioIndexService {
  constructor () {
    'ngInject';

    this.data = [
      {
        title : 'Sony Wheel',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff/39CCCC/ffffff',
        state  : 'sony-wheel'
      },
      {
        title : 'Digital Room',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'haygarth-digital-room'
      },
      {
        title : 'Think Differently',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'think-differently'
      },
      {
        title : 'YSL Rock Chick',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'ysl-rock-chick'
      },
      {
        title : 'Gulp emails',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'gulp-emails'
      },
      {
        title : 'Haygarth',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'haygarth'
      },
      {
        title : 'Sony Demo Bay',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'sony-demo-bay'
      },
      {
        title : 'Giles Deacon',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'giles-deacon'
      },
      {
        title : 'Toni & Guy',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'toni-and-guy'
      },
      {
        title : 'Louise & Daniel',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'louise-and-daniel'
      },
      {
        title : 'Dumfries House',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'dumfries-house'
      },
      {
        title : 'Lambeth Advice Network',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'lambeth-advice-centre'
      },
      {
        title : 'AMBR Media',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'ambr'
      },
      {
        title : 'Layla Moran',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'layla-moran'
      },
      {
        title : 'Lancastrians',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'lancastrians'
      },
      {
        title : 'EUFN',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'eufn'
      },
      {
        title : 'Waterleaf',
      	image : 'http://placehold.it/400x400/39CCCC/ffffff',
        state  : 'waterleaf'
      }
    ];
  }

  getPortfolioIndexContent() {
    return this.data;
  }
}

export default PortfolioIndexService;