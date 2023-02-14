import LoginFlutter from '../pages/login';
import CatalogFlutter from '../pages/catalog';
import Catalog from '../../../test/pages/catalog';
import { testData } from '../test_data/testdata.flutter';
import { assert } from 'chai';

describe('Login', () => {
  let login: LoginFlutter;
  let catalog: CatalogFlutter;
  let c: Catalog;

  beforeEach(() => {
    login = new LoginFlutter();
    catalog = new CatalogFlutter();
    c = new Catalog();
  });

  it('should login with valid credentials', async () => {
    await login.getPageTitle();
    await login.login(testData.username, testData.password);
    const pageTitle = await catalog.getPageTitle();
    assert.strictEqual(pageTitle, catalog.pageTitleText);
  });
});
