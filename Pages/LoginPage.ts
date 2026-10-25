import {expect, Locator,Page} from '@playwright/test'

export class LoginPage{
    readonly page:Page;
    readonly loginLink:Locator;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.loginLink=page.locator('#login2');
        this.userNameInput=page.locator('#loginusername');
        this.passwordInput=page.locator('#loginpassword');
        this.loginButton=page.getByRole('button',{name:'Log in'});
    }

    async navigate(){
        await this.page.goto("https://demoblaze.com/index.html")
    }
    async login(userName:string,password:string){
        await this.loginLink.click();
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForTimeout(3000);
        await expect(this.page.getByRole('link',{name:'Log out'})).toBeVisible();
    }

    async verifyLoginSuccess(){
        await this.page.waitForURL("https://demoblaze.com/index.html");
        await expect(this.page.getByRole('link',{name:'Log out'})).toBeVisible();
        await expect(this.page.locator("#nameofuser")).toContainText('Welcome');
        console.log("You are logged in successfully")
    }
}
