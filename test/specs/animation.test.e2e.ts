import animationTestPage from '../pageobjects/animation.test.page';
import loginPage from '../pageobjects/login.page';
import selectTestPage from "../pageobjects/select.test.page";
import helper from "../helper/helper.ts";

/*
Precondition: Open Interview Application

1. Enter password OpenWebQA
2. Click Authenticate Button
3. Click Animation test Button

Expected Results: Word Welcome with animation is appearing
after no more than 5 second then grey text is available.
*/

describe('Verify animation is appearing ', () => {

    after(async () => {
        helper.closeApp();
    });

    it('Enter password OpenWebQA', async () => {
        await loginPage.login('OpenWebQA')
    })

    it('Select animation test', async () => {
        await selectTestPage.isLabelSelectPageVisible();
        await selectTestPage.clickButtonAnimation();
    })

    it('Verify animation label is appearing after no more than 5 sec', async () => {
        await animationTestPage.isLabelAnimationVisible();
        await animationTestPage.isLabelWelcome();
    })


})

