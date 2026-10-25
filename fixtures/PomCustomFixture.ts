import {test as base, expect} from '@playwright/test'
import {LoginPage} from '../Pages/LoginPage'

type MyFixture={
    loginPage:LoginPage;
}
//we can also export the test at the end
const test=base.extend<MyFixture>({

    loginPage: async({page},use)=>{

        const loginPageObject= new LoginPage(page);

        await loginPageObject.navigate();

        await use(loginPageObject)
    }
})
export {test, expect}