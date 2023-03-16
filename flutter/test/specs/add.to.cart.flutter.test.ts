import LoginFlutter from '../pages/login';
import CatalogFlutter from '../pages/catalog';
import CartFlutter from '../pages/cart';
import Catalog from '../../../ui/test/pages/catalog';
import { testData } from '../test_data/testdata.flutter';
import { assert } from 'chai';

describe('Add items to the cart', () => {
  let login: LoginFlutter;
  let catalog: CatalogFlutter;
  let cart: CartFlutter;
  let catalogNative: Catalog;

  beforeEach(() => {
    login = new LoginFlutter();
    catalog = new CatalogFlutter();
    cart = new CartFlutter();
    // TODO: Check NATIVE_APP context for XCUITest and make automationName dynamic depending on Android/IOS device
    catalogNative = new Catalog('uiautomator2');
  });

  it('should cart page open after clicking on cart button', async () => {
    await login.getPageTitle();
    await login.login(testData.username, testData.password);
    await catalog.getPageTitle();
    await driver.switchContext('NATIVE_APP');
    await catalogNative.openCart();
    await driver.switchContext('FLUTTER');
    const pageTitle = await cart.getPageTitle();
    assert.strictEqual(pageTitle, cart.pageTitleText);
  });
});
