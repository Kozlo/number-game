import { MeanAppPage } from './app.po';

describe('mean-app App', function() {
  let page: MeanAppPage;

  beforeEach(() => {
    page = new MeanAppPage();
  });

  it('should display the app title', () => {
    page.navigateTo();
    expect(page.getStartButtonText()).toEqual('Start!');
  });

  it('should display the start button', () => {
    page.navigateTo();
    expect(page.getStartButtonText()).toEqual('Start!');
  });
});
