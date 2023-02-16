class Common {
  static async getAutomationName() {
    const automationName = (await driver.getSession())['desired'][
      'automationName'
    ];
    console.log('cap...................', automationName);
    return automationName;
  }
}

export default Common;
