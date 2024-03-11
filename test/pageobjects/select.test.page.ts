import { $ } from '@wdio/globals'
import Page from './page';

class SelectTestPage extends Page {
    /**
     * define selectors using getter methods
     */
    get labelSelectTest() {
        return $('//XCUIElementTypeStaticText[@name="description_label_id"]');
    }
    get buttonSecretWordTest() {
        return $('//XCUIElementTypeButton[@name="secret_word_test_btton_id"]');
    }

    get buttonAnimationTest() {
        return $('//XCUIElementTypeButton[@name="animation_test_button_id"]');
    }

    async isLabelSelectPageVisible(){
        const isLabelSelectPageVisible = await this.labelSelectTest.isDisplayed();
        if(!isLabelSelectPageVisible) {
            throw new Error('Select Test Page is not Visible');
        }
    }

    async clickButtonSecretWordTest(){
        await this.buttonSecretWordTest.click();
    }

    async clickButtonAnimation(){
        await this.buttonAnimationTest.click();
    }

}

export default new SelectTestPage();
