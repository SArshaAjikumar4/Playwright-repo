import{test,expect} from '@playwright/test'
import { LoginPage} from '../Pages/LoginPage'
import data from '../Utils/LoginCreditienial.json'
test('Valid Credential login',async({page})=>{
   // await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')
    //const username=page.locator('#user-name')
   // await username.fill('standard_user')
    

   // const password=page.locator('#password')
  //  await password.fill('secret_sauce')

     // const login=page.locator('#login-button')
   // await login.click()
  //  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  const validusername=data.validusername
  const validpassword=data.validpassword
 const loginPage=new LoginPage(page)
 await loginPage.navigateToApplication()
 

  await loginPage.applicationLogin(validusername,validpassword)
  await loginPage.verifyInventoryPage()
})





test('valid username and invalid password',async({page})=>{
  await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')
   // const username=page.locator('#user-name')
   // await username.fill('standard_user')

    //const password=page.locator('#password')
     //   await password.fill('arsha')
     const validusername=data.validusername
  const invalidpassword=data.invalidpassword
    const login=page.locator('#login-button')
    await login.click()
    
     // await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
})





test('invalid username and valid password',async({page})=>{
  await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')
   // const username=page.locator('#user-name')
   // await username.fill('arsha')

  //  const password=page.locator('#password')
      //  await password.fill('secret_sauce')
      const invalidusername=data.invalidusername
  const validpassword=data.validpassword
    const login=page.locator('#login-button')
    await login.click()
   // await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
})





test('invalid username and invalid password',async({page})=>{
  await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')
    //const username=page.locator('#user-name')
    //await username.fill('arsha')

   // const password=page.locator('#password')
      //  await password.fill('arsha')

            const invalidusername=data.invalidusername
              const invalidpassword=data.invalidpassword


      
    const login=page.locator('#login-button')
    await login.click()
   //  await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')

})




