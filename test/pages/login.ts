class Login {
  private get username() {
    return $('//android.widget.EditText[1]');
  }

  private get password() {
    return $('//android.widget.EditText[2]');
  }

  private get btnSubmit() {
    return $('~ENTER');
  }

  private get pageTitle() {
    return $('~Welcome');
  }

  public async setUsername(username: string) {
    await this.username.click();
    await driver.hideKeyboard();
    await this.username.addValue(username);
  }

  public async setPassword(password: string) {
    await this.password.click();
    await driver.hideKeyboard();
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
    const description = await this.pageTitle.getAttribute('content-desc');
    return description;
  }
}

export default Login;
