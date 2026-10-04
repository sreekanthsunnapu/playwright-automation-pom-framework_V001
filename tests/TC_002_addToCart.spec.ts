import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'

test("Verify Add to Cart", async({page})=>{
    const loginPage=new LoginPage(page);
    const homePage=new HomePage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login("admin","admin");
    await loginPage.verifyLoginSuccess();

    await homePage.addItemToCart("Nexus 6");
    await homePage.gotoCart();
})