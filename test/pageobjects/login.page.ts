import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get loginPageLabel () {
        return $('//XCUIElementTypeStaticText[@name="Automation Interview"]');
    }

    public get inputPassword () {
        return $('//XCUIElementTypeTextField[@name="password_text_field_id"]');
    }

    public get buttonAuth () {
        return $('//XCUIElementTypeStaticText[@name="Autenticate"]');
    }

    async clearAndSetValue(value: string) {
        await this.inputPassword.clearValue();
        await this.inputPassword.setValue(value);
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using password
     */
    public async login (password: string) {
        const isLoginPage = await this.loginPageLabel.isDisplayed();
        if(!isLoginPage) {
            throw new Error('Login Page is not Visible');
        }
        await this.clearAndSetValue(password);
        await this.buttonAuth.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
