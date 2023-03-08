import Gestures from '../helpers/gestures';

class Catalog {
  private readonly automationName: string;

  constructor(automationName: string) {
    this.automationName = automationName;
  }

  public pageTitleDescription = 'Catalog';

  private addButton = '//android.widget.Button[@content-desc="ADD"]';
  private scrollView = 'android.widget.ScrollView';
  private ioscart =
    '**/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeButton';

  private get pageTitle() {
    return $('~Catalog');
  }

  private get cart() {
    return this.automationName === 'uiautomator2'
      ? $('(//android.widget.Button)[1]')
      : $(`-ios class chain:${this.ioscart}`);
  }

  public async scrollTillItemIsDisplayedUsingUiSelector(item: string) {
    const scrollTillItem = `new UiScrollable(new UiSelector().className("${this.scrollView}")).scrollIntoView(new UiSelector().description("${item}"))`;
    await $(`android=${scrollTillItem}`);
  }

  public async scrollToTopUsingUiSelector() {
    const scrollTillTop = `new UiScrollable(new UiSelector()).scrollIntoView(new UiSelector().description("${this.pageTitleDescription}"))`;
    await $(`android=${scrollTillTop}`);
  }

  public async scrollTillItemIsDisplayed(item: string) {
    await Gestures.checkIfDisplayedWithSwipeUp(await $(`~${item}`), 10, 1);
  }

  public async addToCart(item: string) {
    await this.scrollTillItemIsDisplayed(item);
    const locateItem = await $(`~${item}`);
    const addButton = await locateItem.$(`${this.addButton}`);
    await addButton.click();
  }

  public async openCart() {
    await Gestures.swipeDown(1);
    await this.cart.click();
  }

  public async getPageTitle() {
    const description =
      this.automationName === 'uiautomator2'
        ? await this.pageTitle.getAttribute('content-desc')
        : await this.pageTitle.getText();
    return description;
  }
}

export default Catalog;