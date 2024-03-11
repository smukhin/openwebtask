import { $ } from '@wdio/globals'
import Page from './page';
// import sinon from 'sinon';


class AnimationTestPage extends Page {
    /**
     * define selectors using getter methods
     */
    get labelAnimation() {
        return $('//XCUIElementTypeStaticText[@name="Animation"]');
    }
    get labelWelcome() {
        return $('//XCUIElementTypeStaticText[@name="welcome_label_id"]');
    }

    async isLabelAnimationVisible(){
        await this.labelAnimation.waitForExist({timeout: 2000});
        const isLabelSecretWordVisible = await this.labelAnimation.isDisplayed();
        if(!isLabelSecretWordVisible) {
            throw new Error('Secret Word Page is not Visible');
        }
    }

    async isLabelWelcome() {
        await this.labelWelcome.waitForDisplayed({
            timeout:5000,
            timeoutMsg: 'Label Welcome is not Visible'
        });
    }


}

export default new AnimationTestPage();
