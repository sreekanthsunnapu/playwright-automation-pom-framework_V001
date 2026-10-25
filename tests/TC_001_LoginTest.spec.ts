import {test,expect} from '@playwright/test'
import {LoginPage} from '../Pages/LoginPage'

test("Verify Login",async({page})=>{
    const loginPage=new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("admin","admin");
    await loginPage.verifyLoginSuccess();
})