import {Locator, Page} from '@playwright/test'

export class CartPage{
    readonly page:Page;
    readonly cartTable:Locator;

    constructor(page:Page){
        this.page=page;
        this.cartTable=page.locator("//tbody[@id='tbodyid']/tr/td[2]")
    }

        async checkProductInCart(searchProduct:string){
            console.log("we are on the product cart page")
            const cartItems=await this.cartTable.all();
            console.log("cartItems", cartItems);
            for(let item of cartItems){
                const itemName=await item.innerText()
                console.log("Cart Item Name", itemName)
                if(searchProduct===itemName){
                console.log("Yes, Product is added to the Cart");
                break;
            }
            }
        }
        async thankingNote(){
            console.log("Thank You, Visit Again")
        }

}