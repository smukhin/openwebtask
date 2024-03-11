import selectTestPage from '../pageobjects/select.test.page';
import loginPage from '../pageobjects/login.page';
import secretWordTestPage from '../pageobjects/secret.word.test.page.ts';
import helper from '../helper/helper';
/*
* Precondition: Open Interview Application

    1. Enter password OpenWebQA
    2. Click Authenticate Button
    3. Click button Secret word test

Expected Results: Secret word is visible
*/
describe('Verify secret word and print to console', () => {

    after(async () => {
        helper.closeApp();
    });

    it('Enter password OpenWebQA', async () => {
        await loginPage.login('OpenWebQA')
    })

    it('Select secret word test', async () => {
        await selectTestPage.isLabelSelectPageVisible();
        await selectTestPage.clickButtonSecretWordTest();
    })

    it('Print secret word to console', async () => {
        await secretWordTestPage.isLabelSecretWordVisible();
        await secretWordTestPage.printSecretWordValueToConsole();
    })


})

