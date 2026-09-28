import { expect } from "@playwright/test"
export class LoginPage{
    //create constructor
    constructor(page){
        this.page=page
        this.usernameField=page.locator('#user-name')
        this.passwordField=page.locator('#password')
        this.login=page.locator('#login-button')
    }

    //method create
    async navigateToApplication(){
          await this.page.goto('https://www.saucedemo.com/')

    }

    async applicationLogin(username,password){
         await this.usernameField.fill(username)
         await this.passwordField.fill(password)
             await this.login.click()

    }

    async verifyInventoryPage()
    {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }
}