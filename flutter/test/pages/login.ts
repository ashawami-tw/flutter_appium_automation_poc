import { bySemanticsLabel } from 'appium-flutter-finder';

class LoginFlutter {
  public pageTitleText = 'Welcome';

  private get username() {
    return bySemanticsLabel('Username');
  }

  private get password() {
    return bySemanticsLabel('Password');
  }

  private get btnSubmit() {
    return bySemanticsLabel('ENTER');
  }

  private get pageTitle() {
    return bySemanticsLabel(`${this.pageTitleText}`);
  }

  public async setUsername(username: string) {
    await driver.elementSendKeys(this.username, username);
  }

  public async setPassword(password: string) {
    await driver.elementSendKeys(this.password, password);
  }

  public async clickSubmit() {
    await driver.elementClick(this.btnSubmit);
  }

  public async login(username: string, password: string) {
    await this.setUsername(username);
    await this.setPassword(password);
    await this.clickSubmit();
  }

  public async getPageTitle() {
    const text = await driver.getElementText(this.pageTitle);
    return text;
  }
}
export default LoginFlutter;
