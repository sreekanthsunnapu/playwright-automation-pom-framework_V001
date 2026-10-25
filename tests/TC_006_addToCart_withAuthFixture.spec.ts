import {test} from '../fixtures/authenticatedPage'
import { HomePage } from '../Pages/HomePage'

//here, beside the page fixture, we are passsing authenticatedPage customeFixture, 
// which provides a ready loggedIn page to the test 
test("Verify Add to Cart With AuthFixture", async({page,authenticatedPage})=>{
    
    //just to confirm that we have a ready loggedIn page, lets call verifyLoginSuccess()
    await authenticatedPage.verifyLoginSuccess();

    //now we are on Home Page, let
    const homePage=new HomePage(page);
    await homePage.addItemToCart("Nexus 6");
    await homePage.gotoCart();
})