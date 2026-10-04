import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { CartPage } from '../Pages/CartPage';
import { statSync } from 'node:fs';

test("Verify Add to Cart", async({page})=>{
    
    
    const loginPage=new LoginPage(page);
    const cartPage=new CartPage(page);
    const homePage=new HomePage(page);
    
    //login Page
    await loginPage.gotoLoginPage();
    await loginPage.login("admin","admin");
    await loginPage.verifyLoginSuccess();

    //Home Page
    await homePage.addItemToCart("Nexus 6");
    //await page.waitForTimeout(3000)
    await homePage.gotoCart();

    //Cart Page
    await cartPage.checkProductInCart("Nexus 6")
})