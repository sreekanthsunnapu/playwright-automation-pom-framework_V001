import {test,expect} from '@playwright/test'
import {LoginPage} from '../Pages/LoginPage'

test("Verify Login",async({page})=>{
    const loginPage=new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login("admin","admin");
    await loginPage.verifyLoginSuccess();
})