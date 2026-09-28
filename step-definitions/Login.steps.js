import { Given,When,Then } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import  assert  from 'assert'
let browser
let page

Given('the user is on the login page',async function(){
    browser=await chromium.launch({headless:false})
    page=await browser.newPage()
    await page.goto('https://www.saucedemo.com/')
}
    
)

When('user enter valid username and password',async function() {
    const usernameField=page.locator('#user-name')
    const passwordField=page.locator('#password')
    const loginButton=page.locator('#login-button')

    await usernameField.fill('standard_user')
    await passwordField.fill('secret_sauce')
    await loginButton.click()

    
    
})

Then('the inventory page should be displayed',async function(){
    await page.locator('.inventory_item').isVisible()
})


When('user enter invalid crediential',async function(){
     const usernameField=page.locator('#user-name')
    const passwordField=page.locator('#password')
    const loginButton=page.locator('#login-button')

    await usernameField.fill('instandard_user')
    await passwordField.fill('insecret_sauce')
    await loginButton.click()

})

Then('error message should be displayed',async function(){

    const error=await page.locator('[data-test="error"]').textContent()
    assert.ok(error.includes('Epic sadface: Username and password do not match any user in this service'))
    await browser.close()
})