import LoginFlutter from '../pages/login';
import CatalogFlutter from '../pages/catalog';
import { testData } from '../test_data/testdata.flutter';
import { assert } from 'chai';

describe('Login', () => {
  let login: LoginFlutter;
  let catalog: CatalogFlutter;

  beforeEach(() => {
    login = new LoginFlutter();
    catalog = new CatalogFlutter();
  });

  it('should login with valid credentials', async () => {
    await login.getPageTitle();
    await login.login(testData.username, testData.password);
    const pageTitle = await catalog.getPageTitle();
    assert.strictEqual(pageTitle, catalog.pageTitleText);
  });
});
