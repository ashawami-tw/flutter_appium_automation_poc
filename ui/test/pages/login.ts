import Common from '../helpers/common';

class Login {
  private readonly automationName: string;

  constructor(automationName: string) {
    this.automationName = automationName;
  }

  private get username() {
    return this.automationName === 'uiautomator2'
      ? $('//android.widget.EditText[1]')
      : $('~Username');
  }

  private get password() {
    return this.automationName === 'uiautomator2'
      ? $('//android.widget.EditText[2]')
      : $('~Password');
  }

  private get btnSubmit() {
    return $('~ENTER');
  }

  private get pageTitle() {
    return $('~Welcome');
  }

  public async setUsername(username: string) {
    await Common.handleClickForUiAutomator2(await this.username);
    await this.username.addValue(username);
  }

  public async setPassword(password: string) {
    await Common.handleClickForUiAutomator2(await this.password);
    await this.password.addValue(password);
  }

  public async clickSubmit() {
    await this.btnSubmit.click();
  }

  public async login(username: string, password: string) {
    await this.setUsername(username);
    await this.setPassword(password);
    await this.clickSubmit();
  }

  public async getPageTitle() {
    const description =
      this.automationName === 'uiautomator2'
        ? await this.pageTitle.getAttribute('content-desc')
        : await this.pageTitle.getText();
    return description;
  }
}

export default Login;
