import { byText, byType } from 'appium-flutter-finder';

class CatalogFlutter {
  public pageTitleText = 'Catalog';

  private get pageTitle() {
    return byText(`${this.pageTitleText}`);
  }

  public async getPageTitle() {
    const text = await driver.getElementText(this.pageTitle);
    return text;
  }

  public async scroll(dx: number, dy: number, duration: number, frequency: number) {
    await driver.execute('flutter:scroll', byType('Scrollable'), {
      dx: dx,
      dy: dy,
      durationMilliseconds: duration,
      frequency: frequency,
    });
  }

  public async scrollUntilVisible(item: string, dx: number, dy, number) {
    await driver.execute('flutter:scrollUntilVisible', byType('Scrollable'), {
      item: byText(`${item}`),
      dxScroll: dx,
      dyScroll: dy,
    });
  }
}

export default CatalogFlutter;
