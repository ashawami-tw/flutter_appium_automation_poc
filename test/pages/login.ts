class Login {
  private get inputUsername() {
    return $('//android.widget.EditText[1]');
  }

  private get inputPassword() {
    return $('//android.widget.EditText[2]');
  }

  private get btnSubmit() {
    return $('~ENTER');
  }

  private get pageTitle() {
    return $('~Welcome');
  }

  public async setUsername(username: string) {
    await this.inputUsername.click();
    await driver.hideKeyboard();
    await this.inputUsername.addValue(username);
  }

  public async setPassword(password: string) {
    await this.inputPassword.click();
    await driver.hideKeyboard();
    await this.inputPassword.addValue(password);
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
    const description = await this.pageTitle.getAttribute('content-desc');
    return description;
  }
}

export default Login;
