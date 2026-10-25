import {test, expect} from '../fixtures/PomCustomFixture'

//here we are passing the custom fixture loginPage to the test, which is defined in fixtures/PomCustomFixture
test("Navigate and Verify Login",async({page, loginPage})=>{
    await loginPage.login('admin','admin');
    await loginPage.verifyLoginSuccess();
})