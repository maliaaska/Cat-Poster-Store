import { TechTestAtrasmediaPage } from './app.po';

describe('tech-test-atrasmedia App', function() {
  let page: TechTestAtrasmediaPage;

  beforeEach(() => {
    page = new TechTestAtrasmediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
