class Cart {
  private readonly automationName: string;

  constructor(automationName: string) {
    this.automationName = automationName;
  }

  private get pageTitle() {
    return $('~Cart');
  }

  public async isItemPresentInCart(item: string) {
    const isItemPresent = await (await $(`~${item}`)).isDisplayed();
    return isItemPresent;
  }

  public async getPageTitle() {
    const description =
      this.automationName === 'uiautomator2'
        ? await this.pageTitle.getAttribute('content-desc')
        : await this.pageTitle.getText();
    return description;
  }
}

export default Cart;
