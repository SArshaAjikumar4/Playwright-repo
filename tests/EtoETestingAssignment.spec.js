
import{test,expect} from '@playwright/test'

test('End to End testing',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')
    const username=page.locator('#user-name')
    await username.fill('standard_user')
    

    const password=page.locator('#password')
    await password.fill('secret_sauce')
    
    const login=page.locator('#login-button')
    await login.click()
    const selectitem=page.locator('#add-to-cart-sauce-labs-bolt-t-shirt')
    await selectitem.click()
    const addcart=page.locator('.shopping_cart_link')
    await addcart.click()
    const checkout=page.locator('#checkout')
    await checkout.click()
    const firstname=page.locator("//input[@placeholder='First Name']")
    await firstname.fill('Riya')
    const secondname=page.locator("//input[@placeholder='Last Name']")
    await secondname.fill('Sham')
    const postalcode=page.locator("//input[@id='postal-code']")
    await postalcode.fill('690550')
    const clickContinue=page.locator("//input[@id='continue']")
    await clickContinue.click()
    const clickFinish=page.locator('#finish')
    await clickFinish.click()
    

    await expect(page).toHaveTitle('Swag Labs')
   await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
   await expect(page.locator('.complete-header')).toContainText('Thank you for your order!')


})