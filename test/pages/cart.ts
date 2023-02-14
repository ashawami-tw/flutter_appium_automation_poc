class Cart {
  private get pageTitle() {
    return $('~Cart');
  }

  public async isItemPresentInCart(item: string) {
    const isItemPresent = await (await $(`~${item}`)).isDisplayed();
    return isItemPresent;
  }

  public async getPageTitle() {
    const description = await this.pageTitle.getAttribute('content-desc');
    return description;
  }
}

export default Cart;
