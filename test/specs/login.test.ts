import Login from '../pages/login';
import Catalog from '../pages/catalog';
import Common from '../helpers/common';
import { testData } from '../test_data/testdata';
import { assert } from 'chai';

describe('Login', () => {
  let login: Login;
  let catalog: Catalog;
  let automationName: string;

  before(async () => {
    automationName = await Common.getAutomationName();
  });

  beforeEach(() => {
    login = new Login(automationName);
    catalog = new Catalog(automationName);
  });

  it('should login with valid credentials', async () => {
    await login.login(testData.username, testData.password);
    const description = await catalog.getPageTitle();
    assert.strictEqual(description, catalog.pageTitleDescription);
  });
});
