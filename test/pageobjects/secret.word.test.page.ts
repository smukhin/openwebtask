import { $ } from '@wdio/globals'
import Page from './page';


class SecretWordTestPage extends Page {
    /**
     * define selectors using getter methods
     */
    get labelSecretWord() {
        return $('//XCUIElementTypeStaticText[@name="Secret word"]');
    }
    get secretWord() {
        return $('//XCUIElementTypeStaticText[@name="secret_word_label_id"]');
    }

    async isLabelSecretWordVisible(){
        await this.labelSecretWord.waitForExist({timeout: 2000})
        const isLabelSecretWordVisible = await this.labelSecretWord.isDisplayed();
        if(!isLabelSecretWordVisible) {
            throw new Error('Secret Word Page is not Visible');
        }
        console.log(isLabelSecretWordVisible);
    }

    async printSecretWordValueToConsole() {
        const secretWordValue = await this.secretWord.getAttribute('value');
        console.log(`Secret Word is: ${secretWordValue}`);
    }

}

export default new SecretWordTestPage();
