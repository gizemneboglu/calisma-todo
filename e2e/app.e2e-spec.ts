import { CalismaPage } from './app.po';

describe('calisma App', () => {
  let page: CalismaPage;

  beforeEach(() => {
    page = new CalismaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
