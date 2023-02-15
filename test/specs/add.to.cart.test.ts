import Login from '../pages/login';
import Catalog from '../pages/catalog';
import Cart from '../pages/cart';
import { testData } from '../test_data/testdata';
import { assert } from 'chai';

describe('Add items to the cart', () => {
  let login: Login;
  let catalog: Catalog;
  let cart: Cart;

  beforeEach(() => {
    login = new Login();
    catalog = new Catalog();
    cart = new Cart();
  });

  it('should add one item to the cart', async () => {
    await login.getPageTitle();
    await login.login(testData.username, testData.password);
    await catalog.getPageTitle();
    await catalog.addToCart(testData.items[0]);
    await catalog.openCart();
    await cart.getPageTitle();
    const isPresent = await cart.isItemPresentInCart(testData.items[0]);
    assert.strictEqual(isPresent, true);
  });
});
