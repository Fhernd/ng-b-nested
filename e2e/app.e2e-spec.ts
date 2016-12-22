import { NgBNestedPage } from './app.po';

describe('ng-b-nested App', function() {
  let page: NgBNestedPage;

  beforeEach(() => {
    page = new NgBNestedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
