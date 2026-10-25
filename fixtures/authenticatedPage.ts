import {test as base, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'

type AuthFixture={
    authenticatedPage:LoginPage;
}

export const test=base.extend<AuthFixture>({
    authenticatedPage: async({page},use)=>{
        const loginPage=new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login("admin","admin");

        //this provides control to the test, passes loginPage object to the test
        await use(loginPage);

        //after the test body execution, control comes to here, we can implement teardown here
        //page.close()
    }
})
export {expect}