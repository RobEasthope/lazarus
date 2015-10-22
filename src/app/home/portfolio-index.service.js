class PortfolioIndexService {
  constructor () {
    'ngInject';

    this.data = [
      {
        title : 'Sony Wheel',
      	image : 'assets/images/projects/sony-wheel/sony-wheel-thumbnail.jpg',
        state  : 'sony-wheel'
      },
      {
        title : 'Digital Room',
      	image : 'assets/images/projects/haygarth-digital-room/haygarth-digital-room-thumbnail.jpg',
        state  : 'haygarth-digital-room'
      },
      // {
      //   title : 'Think Differently',
      // 	image : 'assets/images/projects/think-differently/think-differently-thumbnail.jpg',
      //   state  : 'think-differently'
      // },
      {
        title : 'YSL Rock Chick',
      	image : 'assets/images/projects/ysl-rock-chick/ysl-rock-chick-thumbnail.jpg',
        state  : 'ysl-rock-chick'
      },
      // {
      //   title : 'Gulp Emails',
      // 	image : 'assets/images/projects/gulp-emails/gulp-emails-thumbnail.jpg',
      //   state  : 'gulp-emails'
      // },
      {
        title : 'Haygarth',
      	image : 'assets/images/projects/haygarth/haygarth-thumbnail.jpg',
        state  : 'haygarth'
      },
      {
        title : 'Sony Demo Bay',
      	image : 'assets/images/projects/sony-demo-bay/sony-demo-bay-thumbnail.jpg',
        state  : 'sony-demo-bay'
      },
      {
        title : 'Giles Deacon',
      	image : 'assets/images/projects/giles-deacon/giles-deacon-thumbnail.jpg',
        state  : 'giles-deacon'
      },
      // {
      //   title : 'Toni & Guy',
      // 	image : 'assets/images/projects/toni-and-guy/toni-and-guy-thumbnail.png',
      //   state  : 'toni-and-guy'
      // },
      // {
      //   title : 'Louise & Daniel',
      // 	image : 'assets/images/projects/louise-and-daniel/louise-and-daniel-thumbnail.jpg',
      //   state  : 'louise-and-daniel'
      // },
      // {
      //   title : 'Dumfries House',
      // 	image : 'assets/images/projects/dumfries-house/dumfries-house-thumbnail.jpg',
      //   state  : 'dumfries-house'
      // },
      // {
      //   title : 'Lambeth Advice Network',
      // 	image : 'assets/images/projects/lambeth/lambeth-thumbnail.jpg',
      //   state  : 'lambeth'
      // },
      {
        title : 'AMBR Media',
      	image : 'assets/images/projects/ambr/ambr-thumbnail.png',
        state  : 'ambr'
      },
      // {
      //   title : 'Layla Moran',
      // 	image : 'assets/images/projects/layla/layla-thumbnail.png',
      //   state  : 'layla-moran'
      // },
      // {
      //   title : 'Lancastrians',
      // 	image : 'assets/images/projects/lancastrians/lancastrians-thumbnail.jpg',
      //   state  : 'lancastrians'
      // },
      {
        title : 'EUFN',
      	image : 'assets/images/projects/eufn/eufn-thumbnail.png',
        state  : 'eufn'
      }
      // {
      //   title : 'Waterleaf',
      // 	image : 'assets/images/projects/waterleaf/waterleaf-thumbnail.png',
      //   state  : 'waterleaf'
      // }
    ];
  }

  getPortfolioIndexContent() {
    return this.data;
  }
}

export default PortfolioIndexService;
