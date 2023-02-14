import { byText } from 'appium-flutter-finder';

class CartFlutter {
  public pageTitleText = 'Cart';

  private get pageTitle() {
    return byText(`${this.pageTitleText}`);
  }

  public async getPageTitle() {
    const text = await driver.getElementText(this.pageTitle);
    return text;
  }
}

export default CartFlutter;
