class Common {
  public static automation;
  public static async getAutomationName() {
    const currentSession = await driver.getSession();
    this.automation = currentSession.desired?.automationName;
    return this.automation !== undefined
      ? this.automation
      : currentSession.automationName;
  }

  public static async handle(element) {
    if (Common.automation === 'uiautomator2') {
      await element.click();
      if (!(await driver.isKeyboardShown())) {
        await driver.isKeyboardShown();
      }
    }
  }
}

export default Common;
