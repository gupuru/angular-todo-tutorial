import { AngularMaterialTodoappPage } from './app.po';

describe('angular-material-todoapp App', () => {
  let page: AngularMaterialTodoappPage;

  beforeEach(() => {
    page = new AngularMaterialTodoappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
