class Catalog {
  public pageTitleDescription = 'Catalog';

  private addButton = '//android.widget.Button[@content-desc="ADD"]';
  private scrollView = 'android.widget.ScrollView';

  private get pageTitle() {
    return $('~Catalog');
  }

  private get cart() {
    return $('(//android.widget.Button)[1]');
  }

  public async scrollTillGettingItem(item: string) {
    const scrollTillItem = `new UiScrollable(new UiSelector().className("${this.scrollView}")).scrollIntoView(new UiSelector().description("${item}"))`;
    await $(`android=${scrollTillItem}`);
  }

  public async scrollToTop() {
    const scrollTillTop = `new UiScrollable(new UiSelector()).scrollIntoView(new UiSelector().description("${this.pageTitleDescription}"))`;
    await $(`android=${scrollTillTop}`);
  }

  public async addTocart(item: string) {
    await this.scrollTillGettingItem(item);
    const locateItem = await $(`~${item}`);
    const addButton = await locateItem.$(`${this.addButton}`);
    await addButton.click();
  }

  public async openCart() {
    await this.scrollToTop();
    await this.cart.click();
  }

  public async getPageTitle() {
    const description = await this.pageTitle.getAttribute('content-desc');
    return description;
  }
}

export default Catalog;
