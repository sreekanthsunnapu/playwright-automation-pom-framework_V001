import {test} from '../fixtures/combineMultipleFixtures'

test("Multiple Fixtures Test", async({loginPage, homePage, cartPage})=>{
    console.log("Test Execution starts")
    await loginPage.login("admin","admin");
    await loginPage.verifyLoginSuccess();

    await homePage.addItemToCart("Nexus 6");
    await homePage.gotoCart();

    await cartPage.checkProductInCart("Nexus 6");
    await cartPage.thankingNote();
})