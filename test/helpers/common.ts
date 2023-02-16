class Common {
  public static async getAutomationName() {
    const currentSession = await driver.getSession();
    const automation = currentSession.desired?.automationName;
    return automation !== undefined
      ? automation
      : currentSession.automationName;
  }
}

export default Common;
