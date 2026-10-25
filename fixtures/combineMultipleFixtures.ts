import {test as base} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { CartPage } from '../Pages/CartPage'

type MultipleFixtures={
    loginPage:LoginPage;
    homePage:HomePage;
    cartPage:CartPage;
}

export const test=base.extend<MultipleFixtures>({
    loginPage:async({page},use)=>{
        const loginPage=new LoginPage(page);
        await loginPage.navigate();

        await use(loginPage);
    },
    homePage: async({page},use)=>{
        const homePage=new HomePage(page);

        await use(homePage)
    },
    cartPage: async({page},use)=>{
        const cartPage=new CartPage(page);

        await use(cartPage)
    }
})