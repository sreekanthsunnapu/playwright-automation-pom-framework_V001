import {Locator,Page, expect} from '@playwright/test'

export class HomePage{
    readonly page:Page;
    readonly productsList:Locator;
    readonly placeOrderButton:Locator;
    readonly cartProductHeader:Locator;
    

    constructor(page:Page){
        this.page=page;
        this.productsList=page.locator("#tbodyid h4 a");
        this.placeOrderButton=page.getByRole('button',{name:'Place Order'});
        this.cartProductHeader=page.locator("h2");
    }

    async addItemToCart(searchItem:string){
        const items=await this.productsList.all();
        for(let item of items){
            const itemName=await item.innerText();
            if(itemName===searchItem){
                item.click();
                break;
            }
        }
        this.page.on('dialog', async (dialog)=>{
            console.log(dialog.message());
            await dialog.accept();
        })
        this.page.getByRole('link',{name:'Add to cart'}).click();
        // this.page.waitForTimeout(2000)
        await expect(this.cartProductHeader).toBeVisible();
    }

    async gotoCart(){
        await this.page.locator('#cartur').click();
        await this.page.waitForLoadState('load');
        //await this.page.waitForTimeout(1000)
        await expect(this.placeOrderButton).toBeVisible()
        //await this.page.waitForTimeout(3000)
        await this.page.waitForURL('https://demoblaze.com/cart.html');
        // await this.page.waitForTimeout(1000)
    }

}