import {test as base, expect, APIRequestContext} from '@playwright/test'

type APIFixture={
    apiContext:APIRequestContext;
}

export const test=base.extend<APIFixture>({
    apiContext: async({playwright}, use)=>{

        const apiContext=await playwright.request.newContext({
            baseURL: "http://localhost:3000"
        })
        //provide control to the test
        await use(apiContext)

        //resource-cleanup
        //This method discards all its resources, 
        //calling any method on disposed APIRequestContext will throw an exception.
        await apiContext.dispose();
        console.log("API Context disposed")
    }
});
export {expect}