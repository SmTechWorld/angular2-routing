import { MyFirstAJ2Page } from './app.po';

describe('my-first-aj2 App', () => {
  let page: MyFirstAJ2Page;

  beforeEach(() => {
    page = new MyFirstAJ2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
