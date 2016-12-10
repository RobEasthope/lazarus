class HomeController {
  constructor (PortfolioIndex) {
    'ngInject';

    this.indexContents = [];

    this.activate(PortfolioIndex);
  }




  activate(PortfolioIndex) {
    this.getPortfolioIndex(PortfolioIndex);
  }

  getPortfolioIndex(PortfolioIndex) {
    this.indexContents = PortfolioIndex.getPortfolioIndexContent();
  }
}

export default HomeController;
