// import { $ } from '@wdio/globals'
import Page from '../pageobjects/page';

class Helper extends Page {
    async closeApp() {
        driver.terminateApp('com.openweb.AutomationInterview');
    }
}

export default new Helper();
