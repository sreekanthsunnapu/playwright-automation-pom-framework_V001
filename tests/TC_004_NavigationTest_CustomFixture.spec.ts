import {test, expect} from '../fixtures/navigateCustomFixture'

test(`verify app title`, async({page, appPage})=>{

    console.log("Test execution started")
    await expect(page).toHaveTitle(`STORE`)
});

test(`Verify LogIn link`, async({page, appPage})=>{
    console.log("test execution started")
    await expect(page.getByRole("link",{name:'Log in'})).toBeVisible();
})