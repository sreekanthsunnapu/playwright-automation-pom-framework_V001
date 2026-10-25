import {test as base, expect} from '@playwright/test'

//What is Fixture: a fixture is a machanism to setting up the resources and environment that a test needs before it run
//also, the fixtures can clean up the resources after the test execution 

type MyFixtures={
    appPage:void;
};

export const test=base.extend<MyFixtures>({

    appPage:async ({page},use)=>{
        console.log("Fixture setup started")
        
        //setup
        await page.goto("https://demoblaze.com/index.html")
        console.log("website opened")

        //provide control to the test
        await use();

        //tear-down and clean-up logic 
        console.log("Fixture teardown started")
        await page.close()
    }

});
export {expect};