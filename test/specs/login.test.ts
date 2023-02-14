import Login from '../pages/login';
import Catalog from '../pages/catalog';
import { testData } from '../test_data/testdata';
import { assert } from 'chai';

describe('Login', () => {
  let login: Login;
  let catalog: Catalog;

  beforeEach(() => {
    login = new Login();
    catalog = new Catalog();
  });

  it('should login with valid credentials', async () => {
    await login.login(testData.username, testData.password);
    const description = await catalog.getPageTitle();
    assert.strictEqual(description, catalog.pageTitleDescription);
  });
});
